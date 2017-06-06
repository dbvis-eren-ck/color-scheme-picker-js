# Color Scheme Picker
A simple and customizable web color scheme picker.

<p align="center"><img width=100% src="https://raw.githubusercontent.com/dbvis-eren-ck/color-scheme-picker-js/master/media/color-scheme-picker.png"></p>

## Usage Example

An example HTML page

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Color scheme picker js</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Load CSS -->
    <link href="color-scheme-picker.css" rel="stylesheet">

</head>

<body>
    <div class="colors-body">
    </div>

    <!-- JavaScript libs -->
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <!-- Own js scripts -->
    <script src="color-scheme-picker.js"></script>
    <script src="color-schemes.js"></script>
</body>

</html>
```

Add the color picker to the div `colors-body` of html page with

```js
var picker = colorSchemePicker('.colors-body');

// Define the on click function
picker.onClick = function() {
        console.log('On click works');
    };
```

## Color Schemes

Add, delete and modify the color schemes by changing the `color-scheme.js` file.



## Built With

* [D3](https://d3js.org/)
* [jQuery](http://jquery.com/)

#### Sources
* [Color Picker](https://bl.ocks.org/mbostock/5577023)
* [ColorBrewer](http://colorbrewer2.org)
* [Material Design](https://material.io/guidelines/style/color.html#color-color-palette)

## License
This project is licensed under the GNU General Public License, version 3.
