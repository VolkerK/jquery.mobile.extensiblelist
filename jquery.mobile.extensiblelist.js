/*
 * jquery.mobile.extensiblelist v1
 *
 * Copyright (c) 2012, Volker Krebs
 * Dual licensed under the MIT and GPL Version 2 licenses.
 * 
 * Date: 2012-07-20
 * Revision: 1
 */
(function($) {
	$.widget("mobile.extensiblelist", $.mobile.widget, {
		options: {
			extlstPlaceholder: 'more',
			extlstSize: 5
		},
		_create: function() {
			if (isNaN(this.options.extlstSize)) {
				//default to 5 if input was wrong
				this.options.extlstSize = 5;
			}
			var self = this
			  , listitems = this.element.children('li')
			  , appendMoreButton = false
			  , hiddenEntriesCount = listitems.length - this.options.extlstSize;
			listitems.each(function(index, li) {
				if(index >= self.options.extlstSize) {
					$(li).hide();
					appendMoreButton = true;
				}
			});
			if (appendMoreButton) {
				var btninner = $([
					'<a href="#" class="extensiblelist-morebtn">',
						this.options.extlstPlaceholder,
						'<span class="ui-li-count">', hiddenEntriesCount, '</span>',
					'</a>'].join(''));
				btninner.bind("click", {list: this.element, size: this.options.extlstSize} , this._more);
				var morebtn = $('<li data-icon="false">')
					.addClass('ui-extensiblelist-morebtn')
					.append(btninner);
				this.element.append(morebtn);
			}
			this.element.listview();
		},
		_more: function(event) {
			var morebtn = event.data.list.children(".ui-extensiblelist-morebtn")
			  , hiddenListitems = event.data.list.children('li:hidden')
			  , countBubble = morebtn.find('span.ui-li-count');
			hiddenListitems.each(function(index, li) {
				if(index < event.data.size) {
					$(li).show();
				}
			});
			if (hiddenListitems.length <= event.data.size) {
				morebtn.remove();
			}
			countBubble.html(hiddenListitems.length - event.data.size);
		}
	});

	$(document).bind("pagecreate", function(event) {
		$(event.target).find(":jqmData(role='extensiblelist')").extensiblelist();
	});
}(jQuery));
