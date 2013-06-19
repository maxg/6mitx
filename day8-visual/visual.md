Resources
---------

[D3.js](http://d3js.org)

[API Reference](https://github.com/mbostock/d3/wiki/API-Reference): selections, transitions, working with arrays, math, loading external resources & Ajax, string formatting, CSV & TSV, colors, namespaces, quantitative scales, ordinal scales, SVG shapes, axes, controls, time formatting, time scales, time intervals, bundle layout, chord layout, cluster layout, force layout, hierarchy layout, histogram layout, pack layout, partition layout, pie layout, stack layout, tree layout, treemap layout, geographic paths, geographic projections, geographic streams, Voronoi diagrams, quadtrees, polygons, convex hull, drag, zoom

[Tutorials](https://github.com/mbostock/d3/wiki/Tutorials) and [gallery of examples](https://github.com/mbostock/d3/wiki/Gallery)

*[Interactive Data Visualization for the Web](http://chimera.labs.oreilly.com/books/1230000000345/index.html)*

Getting Started
---------------

- [D3 Show Reel](http://bl.ocks.org/mbostock/1256572)
- [A Bar Chart, Part I](http://mbostock.github.io/d3/tutorial/bar-1.html) and [Part II](http://mbostock.github.io/d3/tutorial/bar-2.html)
- [Stacked-to-Grouped Bars](http://bl.ocks.org/mbostock/3943967)

Further Reading
---------------

- [Three Little Circles](http://mbostock.github.com/d3/tutorial/circle.html), [Thinking with Joins](http://bost.ocks.org/mike/join/), and [How Selections Work](http://bost.ocks.org/mike/selection/)
- [General Update Pattern I](http://bl.ocks.org/mbostock/3808218), [II](http://bl.ocks.org/mbostock/3808221), and [III](http://bl.ocks.org/mbostock/3808234)
- And plenty more on the [tutorials](https://github.com/mbostock/d3/wiki/Tutorials) wiki page

Examples
--------

- [Histogram](http://bl.ocks.org/mbostock/3048450), also [Duration Histogram](http://bl.ocks.org/mbostock/3048166)
- [Grouped Bar Chart](http://bl.ocks.org/mbostock/3887051), [Stacked Bar Chart](http://bl.ocks.org/mbostock/3886208), and [Normalized Stacked Bar Chart](http://bl.ocks.org/mbostock/3886394)
- [Scatterplot](http://bl.ocks.org/mbostock/3887118), [Scatterplot with Shapes](http://bl.ocks.org/mbostock/3244058)
- [Line Chart](http://bl.ocks.org/mbostock/3883245), [Multi-Series Line Chart](http://bl.ocks.org/mbostock/3884955), and [Area Chart](http://bl.ocks.org/mbostock/3883195)
- [Pie Chart](http://bl.ocks.org/mbostock/3887235) and [Donut Chart](http://bl.ocks.org/mbostock/3887193)
- [Difference Chart](http://bl.ocks.org/mbostock/3894205)
- [Metropolitan Unemployment](http://bl.ocks.org/mbostock/4736806)
- [Stacked Radial Area](http://bl.ocks.org/mbostock/3048740)
- [Pie Multiples with Nesting](http://bl.ocks.org/mbostock/1305337)
- [Horizon Chart](http://bl.ocks.org/mbostock/1483226)
- [Bubble Chart](http://bl.ocks.org/mbostock/4063269)
- [Treemap](http://bl.ocks.org/mbostock/972398)
- [Chord Diagram](http://bl.ocks.org/mbostock/4062006)
- [Cluster Dendrogram](http://bl.ocks.org/mbostock/4063570)

Examples with Song & Dance
--------------------------

- [Pie Chart Update II](http://bl.ocks.org/mbostock/1346410)
- [Sortable Bar Chart](http://bl.ocks.org/mbostock/3885705)
- [Hierarchical Bar Chart](http://bl.ocks.org/mbostock/1283663)
- [Closest Point to Segment](http://bl.ocks.org/mbostock/4281513)
- [X-Value Mouseover](http://bl.ocks.org/mbostock/3902569)
- [Force-Directed Graph](http://bl.ocks.org/mbostock/4062045)

Miscellaneous
-------------

- [Underscore's Equivalents in D3](http://bl.ocks.org/mbostock/3934356)
- [Margin Convention](http://bl.ocks.org/mbostock/3019563)
- [Every ColorBrewer Scale](http://bl.ocks.org/mbostock/5577023)
- [Lines with Rounded Turns](http://bl.ocks.org/mbostock/4062919)
- [Ordinal Axis](http://bl.ocks.org/mbostock/3259783)
- [Chained Transitions](http://bl.ocks.org/mbostock/3903818)
- [Update-Only Transition](http://bl.ocks.org/mbostock/3900925)

Data from Freebase
------------------

[Populations, population growth rate, and life expectancy for some countries](http://www.freebase.com/query?autorun=1&q=%5B%7B%22name%22%3Anull%2C%22type%22%3A%22%2Flocation%2Fcountry%22%2C%22%2Flocation%2Fstatistical_region%2Fpopulation%22%3A%7B%22number%22%3Anull%2C%22year%22%3Anull%2C%22sort%22%3A%22-year%22%2C%22limit%22%3A1%7D%2C%22%2Flocation%2Fstatistical_region%2Fpopulation_growth_rate%22%3A%7B%22rate%22%3Anull%2C%22date%22%3Anull%2C%22sort%22%3A%22-date%22%2C%22limit%22%3A1%7D%2C%22%2Flocation%2Fstatistical_region%2Flife_expectancy%22%3A%7B%22number%22%3Anull%2C%22date%22%3Anull%2C%22sort%22%3A%22-date%22%2C%22limit%22%3A1%7D%7D%5D) &mdash; see the [Country schema](http://www.freebase.com/location/country?schema) for  additional properties you can query; under *included types*, expand *statistical region*

[PG movies released in 2001](http://www.freebase.com/query?autorun=1&q=%5B%7B%22name%22%3Anull%2C%22type%22%3A%22%2Ffilm%2Ffilm%22%2C%22%2Ffilm%2Ffilm%2Finitial_release_date%22%3Anull%2C%22%2Ffilm%2Ffilm%2Finitial_release_date%3E%3D%22%3A%222001-01-01%22%2C%22%2Ffilm%2Ffilm%2Finitial_release_date%3C%22%3A%222002-01-01%22%2C%22%2Ffilm%2Ffilm%2Fdirected_by%22%3A%5B%7B%22name%22%3Anull%7D%5D%2C%22%2Ffilm%2Ffilm%2Frating%22%3A%5B%7B%22name%22%3A%22PG+(USA)%22%7D%5D%7D%5D) &mdash; see the [Film schema](http://www.freebase.com/film/film?schema)

[Albums released in 1991 more than 30 minutes long](http://www.freebase.com/query?autorun=1&q=%5B%7B%22name%22%3Anull%2C%22type%22%3A%22%2Fmusic%2Falbum%22%2C%22%2Fmusic%2Falbum%2Frelease_date%22%3Anull%2C%22%2Fmusic%2Falbum%2Frelease_date%3E%3D%22%3A%221991-01-01%22%2C%22%2Fmusic%2Falbum%2Frelease_date%3C%22%3A%221992-01-01%22%2C%22%2Fmusic%2Falbum%2Fartist%22%3A%5B%7B%22name%22%3Anull%7D%5D%2C%22%2Fmusic%2Falbum%2Fprimary_release%22%3A%7B%22%2Fmusic%2Frelease%2Flength%22%3Anull%2C%22%2Fmusic%2Frelease%2Flength%3E%22%3A1800%2C%22%2Fmusic%2Frelease%2Ftrack_list%22%3A%7B%22return%22%3A%22count%22%7D%7D%7D%5D) &mdash; see the [Musical Album schema](http://www.freebase.com/music/album?schema)

[MQL Reference Guide](http://mql.freebaseapps.com)
