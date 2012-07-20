Extensible listview for jQuery Mobile
======================================
What is it
----------
A jQuery Mobile Plug-in that applies the listview Plug-in and splits up the list into handy chunks.
It automatically adds a "more ..." button to load more chunks.

How to use
----------
Put *jquery.mobile.extensiblelist.js* and *jquery.mobile.extensiblelist.css* into your jQuery Mobile application like
you would do with any other plugin.
You can then easily add the data-role "extensiblelist" to any ul Element and make it a extensible list.

~~~
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
~~~

Take a look at the examples or try out this [jsfiddle](http://jsfiddle.net/TJ3NH/3/)

Upcoming Features
-----------------
Add an ajxa url so that chunks can be loaded dynamically. At the moment the whole list is loaded and parts of it are hidden.
