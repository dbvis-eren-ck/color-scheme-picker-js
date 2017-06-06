/*eslint-disable no-unused-lets*/
/*global window, d3, colorSchemes , $ */
var colorSchemePicker = function(selector) {
    var self = {};

    // active selected color scheme
    let activeColorScheme = colorSchemes.Red;

    // on click function - user should overwrite this function
    self.onClick = function() {
        // console.log(activeColorScheme);
    };

    // the palette
    self.palette = d3.select(selector)
        .selectAll('.palette')
        .data(d3.entries(colorSchemes))
        .enter()
        .append('span')
        .attr('class', 'palette')
        .attr('id', function(d) {
            return d.key;
        })
        .on('click', function(d) {
            // hightlight the chosen palette
            $('.palette').removeClass('selected');
            $('.palette[id=\"' + d.key + '\"]').addClass('selected');
            activeColorScheme = colorSchemes[d.key];
            // call the on click function
            self.onClick();
        })
        .selectAll('.swatch')
        .data(function(d) {
            return d.value;
        })
        .enter()
        .append('span')
        .attr('class', 'swatch')
        .style('background-color', function(d) {
            return d;
        });

    // highlight the default color scheme
    $('.palette[id=\"Red\"]').addClass('selected');

    return self;
};
