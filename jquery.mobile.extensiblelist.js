/*
 * jquery.mobile.extensiblelist v1
 *
 * Copyright (c) 2012, Volker Krebs
 * Dual licensed under the MIT and GPL Version 2 licenses.
 * 
 * Date: 2012-07-20
 * Revision: 1
 */
(function($){
	$.widget("mobile.extensiblelist", $.mobile.widget, {
		options: {
			extlstPlaceholder: 'more',
			extlstSize: 5
		},
		_create: function() {
			var listitems = this.element.children('li');
			if (isNaN(this.options.extlstSize)) {
				//default to 5 if input was wrong
				this.options.extlstSize = 5;
			}
			var self = this
			  , appendMoreButton = false
			  , hiddenEntriesCount = listitems.length - this.options.extlstSize;
			listitems.each(function(index, li) {
				if(index >= self.options.extlstSize) {
					$(li).hide();
					appendMoreButton = true;
				}
			});
			if (appendMoreButton) {
				var countBubble = $('<span class="ui-li-count">').html(hiddenEntriesCount)
				  , btninner = $('<a href="#" class="extensiblelist-morebtn">')
					.bind("click", {list: this.element, size: this.options.extlstSize} , this._more)
				  	.html(this.options.extlstPlaceholder)
				  	.append(countBubble)
				var morebtn = $('<li data-icon="false" class="ui-extensiblelist-morebtn">').append(btninner);
				this.element.append(morebtn);
			}
			this.element.listview();
			//workaround for jqm-1.0: remove the class ui-link
			//the class ui-link screws up the link colors. It is removed from listview elements since jqm 1.1 anyway!
			this.element.find("a").removeClass("ui-link");
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
