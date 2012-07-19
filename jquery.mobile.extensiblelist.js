(function($){
	$.widget("mobile.extensiblelist", $.mobile.widget, {
		options: {
			placeholder: 'more ...',
		},
		_create: function() {
			//TODO: Check if listview is ok, are we really an ul element ?
			this.element.append('<li>' + this.options.placeholder + '</li>');
			this.element.listview();
		},
	});

	$(document).bind("pagecreate", function(event) {
		$(event.target).find(":jqmData(role='extensiblelist')").extensiblelist();
	});
}(jQuery));
