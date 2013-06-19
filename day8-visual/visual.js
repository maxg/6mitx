var data = [ 0, 4, 8, 8, 15, 16, 23, 42 ];

var x_scale = d3.scale.linear()
                .domain([0, d3.max(data)]).range(["0%", "100%"]);

var chart = d3.select(".chart-container")
                .append("div")
                .attr("class", "chart");
chart.selectAll("div").data(data)
  .enter().append("div")
    .style("width", x_scale)
    .text(function(d) { return d; });
