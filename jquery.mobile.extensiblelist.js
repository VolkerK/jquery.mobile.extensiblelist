(function($){
	$.widget("mobile.extensiblelist", $.mobile.widget, {
		options: {
			extlstPlaceholder: 'more',
			extlstSize: 5,
		},
		_create: function() {
			var listitems = this.element.children('li');
			listitems.each(function(index, li) {
				if(index >= 3) {
					$(li).hide();
				}
			});
			//TODO: Check if listview is ok, are we really an ul element ?
			this.element.append('<li class="ui-extensiblelist-morebtn"><a href="#" class="extensiblelist-morebtn">' + this.options.extlstPlaceholder + '</a></li>');
			this.element.listview();
			$(".extensiblelist-morebtn").bind("click", this.element, this._more)
		},
		_more: function(event) {
			var morebtn = event.data.children(".ui-extensiblelist-morebtn");
			var hiddenListitems = event.data.children('li:hidden');
			hiddenListitems.each(function(index, li) {
				if(index < 3) {
					$(li).show();
				}
			});
			if (hiddenListitems.length <= 3) {
				morebtn.remove();
			}
		}
	});

	$(document).bind("pagecreate", function(event) {
		$(event.target).find(":jqmData(role='extensiblelist')").extensiblelist();
	});
}(jQuery));
