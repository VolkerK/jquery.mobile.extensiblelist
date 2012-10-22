module('jquery mobile extensible list test');

test('test proper setup', 3, function() {
	strictEqual(typeof jQuery, 'function', 'jquery initialized');
	strictEqual(typeof jQuery.mobile, 'object', 'jquery mobile initialized');
	strictEqual(typeof jQuery.mobile.extensiblelist, 'function', 'jquery mobile extensiblelist initialized');
});

test('test default values', 7, function() {
	addExtensiblelistToMarkup(15);
	equal(jQuery(':jqmData(role=extensiblelist) > li').length, 16, 'Total of 16 li expected. 15 items, one more button');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 1, 'Expecting 1 more button');
	equal(jQuery('a.extensiblelist-morebtn').text().substring(0, 4), 'more' , 'Standard placeholder text is more');
	equal(jQuery('span.ui-li-count').text(), 10, '10 items left');
	jQuery('a.extensiblelist-morebtn').trigger('click');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 1, 'Expecting 1 more button');
	equal(jQuery('span.ui-li-count').text(), 5, '5 items left');
	jQuery('a.extensiblelist-morebtn').trigger('click');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 0, 'No more button left');
});

test('test size 3', 7, function() {
	addExtensiblelistToMarkup(7,3,'more...');
	equal(jQuery(':jqmData(role=extensiblelist) > li').length, 8, 'Total of 8 li expected. 7 items, one more button');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 1, 'Expecting 1 more button');
	equal(jQuery('a.extensiblelist-morebtn').text().substring(0, 7), 'more...' , 'Test different placeholder text');
	equal(jQuery('span.ui-li-count').text(), 4, '4 items left');
	jQuery('a.extensiblelist-morebtn').trigger('click');
	equal(jQuery('a.extensiblelist-morebtn').text().substring(0, 7), 'more...' , 'Placeholder text still different');
	equal(jQuery('span.ui-li-count').text(), 1, '1 items left');
	jQuery('a.extensiblelist-morebtn').trigger('click');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 0, 'Expecting no more button');
});

test('test less items', 2, function() {
	addExtensiblelistToMarkup(2);
	equal(jQuery(':jqmData(role=extensiblelist) > li').length, 2, 'Total of 2 li expected. 2 items, no more button');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 0, 'Expecting no more button');
});

test('test count with list-dividers', 5, function() {
	//create a list with 15 li
	addExtensiblelistToMarkup(15,undefined,undefined,4);
	equal(jQuery('span.ui-li-count').text(), 8, '8 countable items left');
	equal(jQuery('.ui-li-count').length, 1, 'Expecting a count bubble');
	jQuery('a.extensiblelist-morebtn').trigger('click');
	equal(jQuery('span.ui-li-count').text(), 4, '4 countable  items left');
	equal(jQuery('.ui-li-count').length, 1, 'Expecting a count bubble');
	jQuery('a.extensiblelist-morebtn').trigger('click');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 0, 'Expecting no more button');
});

test('test count bubble', 3, function() {
	addExtensiblelistToMarkup(2,1,undefined,undefined,false);
	equal(jQuery(':jqmData(role=extensiblelist) > li').length, 3, 'Total of 3 li expected. 2 items, one more button');
	equal(jQuery('.ui-extensiblelist-morebtn').length, 1, 'Expecting a more button');
	equal(jQuery('.ui-li-count').length, 0, 'Count bubble is disabled');
});


/**
 * count: number of li-Element that will be created
 * extlstSize: the data-extlst-size attribute for extensiblelist plug-in
 * extlstPlaceholder: the data-extlst-placeholder attribute for extensiblelist plug-in
 * listdividerModulo: every nth li will become a list-divider
 * extlstShowcount: show the count bubble
 */
function addExtensiblelistToMarkup(count, extlstSize, extlstPlaceholder, listdividerModulo, extlstShowcount) {
	var items = '';
	for (i=0; i<count; i++) {
		var divider = '';
		if (typeof listdividerModulo != "undefined") {
			//every 4th li becomes a list-divider
			if ((i % listdividerModulo) == 0) {
				divider = ' data-role="list-divider"';
			}
		}
		items += '<li' + divider + '>item' + i + '</li>'
	}
	var options = '';
	if (typeof extlstSize != "undefined") options += ' data-extlst-size="' + extlstSize + '"';
	if (typeof extlstPlaceholder != "undefined") options += ' data-extlst-placeholder="' + extlstPlaceholder + '"';
	if (typeof extlstShowcount != "undefined") options += ' data-extlst-showcount="' + extlstShowcount + '"';
	var list = jQuery( '<ul data-role="extensiblelist" ' + options + '>' + items + '</ul>' ).appendTo( ':jqmData(role=content)' );
	// apply plug-in
	list.extensiblelist();
}
