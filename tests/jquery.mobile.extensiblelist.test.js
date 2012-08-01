module('jquery mobile extensible list test');

test('test proper setup', 3, function() {
	strictEqual(typeof jQuery, 'function', 'jquery not initialized');
	strictEqual(typeof jQuery.mobile, 'object', 'jquery mobile not initialized');
	strictEqual(typeof jQuery.mobile.extensiblelist, 'function', 'jquery mobile extensiblelist not initialized');
});

test("test plug-in", 0, function() {
	var boilerplate = $([
					'<div data-role="page">',
						'<div data-role="content"></div>',
					'</div>'].join(''));
	boilerplate.appendTo( document.body );
	var items;
	for (i=0; i<15; i++) {
		items += '<li>item' + i + '</li>'
	}
	var list = jQuery( '<ul data-role="extensiblelist">' + items + '</ul>' ).appendTo( ':jqmData(role=content)' );
	//var e = jQuery( '#test1' );
	//strictEqual(typeof e, "object", "no element found");
	boilerplate.page();
	list.extensiblelist();
});
