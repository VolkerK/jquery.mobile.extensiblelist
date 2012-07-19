(function($){
	$.widget("mobile.extensiblelist", $.mobile.widget, {
		options: {
			placeholder: 'more ...',
		},
		_create: function() {
			//TODO: Check if listview is ok, are we really an ul element ?
			this.element.append('<li class="ui-extensiblelist-morebtn"><a href="#" class="extensiblelist-morebtn">' + this.options.placeholder + '</a></li>');
			this.element.listview();
			$(".extensiblelist-morebtn").bind("click", this.element, this._more)
		},
		_more: function(event) {
			var morebtn = event.data.children(".ui-extensiblelist-morebtn");
			$('<li>mmmmm</li>').insertBefore(morebtn);
			event.data.listview('refresh');
		}
	});

	$(document).bind("pagecreate", function(event) {
		$(event.target).find(":jqmData(role='extensiblelist')").extensiblelist();
	});
}(jQuery));
