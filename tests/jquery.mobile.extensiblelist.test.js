module('jquery mobile extensible list test');

test('test proper setup', 3, function() {
	strictEqual(typeof jQuery, 'function', 'jquery initialized');
	strictEqual(typeof jQuery.mobile, 'object', 'jquery mobile initialized');
	strictEqual(typeof jQuery.mobile.extensiblelist, 'function', 'jquery mobile extensiblelist initialized');
});

test('test plug-in', 3, function() {
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
	boilerplate.page();
	list.extensiblelist();
	equal(jQuery(':jqmData(role=extensiblelist) > li').length, 16, 'Total of 16 li expected. 15 items, one more button');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 1, 'Expecting 1 more button');
	equal(jQuery('span.ui-li-count').text(), 10, '10 items left');
	//the selector li:hidden is not working in test environment
	//jQuery('a.extensiblelist-morebtn').trigger('click');
	//equal(jQuery('span.ui-li-count').text(), 5, '5 items left');
});
