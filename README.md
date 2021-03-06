Extensible listview for jQuery Mobile
======================================
What is it
----------
A lightweight jQuery Mobile Plug-in that applies the listview Plug-in and splits up the list into handy chunks.
It automatically adds a "more" button to show more chunks.

How to use
----------
Put *jquery.mobile.extensiblelist.js* and *jquery.mobile.extensiblelist.css* into your jQuery Mobile application like
you would do with any other plugin.
You can then easily add the data-role "extensiblelist" to any ul Element and make it an extensible list.

```html
<ul data-role="extensiblelist">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
  <li>Item 8</li>
</ul>
```

Take a look at the examples or try out this [jsfiddle](http://jsfiddle.net/TJ3NH/3/)

Data-attribute reference
------------------------
* **data-extlst-placeholder** - string, Default = 'more'

  Text that will be written on the button at the end of the list.
  
* **data-extlst-size** - number, Default = 5

  Size of the chuncks.

* **data-extlst-grabspace** - boolean, Default = false

  Initially show as much items as possible. But never less than data-extlst-size.
  The space each item needs is calculated from the first non list-divider item.
  So this only works properly if all items have the same height.
  Use only when there is **one** extensiblelist on the page.

* **data-extlst-autoscroll** - boolean, Default = false

  Scrolls to the bottom of the list, so that the more button will be visible.
  Use only when there is **one** extensiblelist on the page.

* **data-extlst-showcount** - boolean, Default = true

  Display the count bubble.

Hint
----
If your looking for a more feature rich (but complex) solution, including templates and other handy stuff take look at 
[LazyLoader Widget for jQuery Mobile](https://github.com/dcarrith/jquery.mobile.lazyloader) 

For a more lightweight lazy loading plugin check out my [Plug-In lazylist](https://github.com/VolkerK/jquery.mobile.lazylist)
