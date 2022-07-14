# main.css

A repository for the development of the HTML5 Boilerplate CSS file, `style.css`. 

Historically, the file shipped with HTML5 Boilerplate was called `main.css`, hence the name of this project. It's since been renamed to `style.css`.  Just in case you were confused. 

This project includes both the whole `main.css` file as well as component files used to generate `main.css`. This way you can either pull in the whole file, as we do in HTML5 Boilerplate (renaming it to `style.css`) or you can pull in the individual files as needed.

[![GitHub Super-Linter](https://github.com/h5bp/main.css/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Quick start

Choose one of the following options:

- Download as part of the latest stable release of HTML5 Boilerplate from
  [html5boilerplate.com](https://html5boilerplate.com/).
- Clone the git repo — `git clone
  https://github.com/h5bp/main.css.git` - and checkout the
  [tagged release](https://github.com/h5bp/main.css/releases)
  you'd like to use.
- Install with [npm](https://www.npmjs.com/): `npm install main.css` and pull in what you need from the resulting `node_modules/main.css/dist`folder
- Install with [yarn](https://yarnpkg.com/): `yarn add main.css` and pull in what you need from the resulting `node_modules/main.css/dist`folder

## Features

The project contains the following files, which combine to create the different sections of `main.css.`

### _base.css

Several base styles are included. These styles:

- provide basic typography settings that improve text readability
- protect against unwanted `text-shadow` during text highlighting
- tweak the default alignment of some elements (e.g.: `img`, `video`,
  `fieldset`, `textarea`)

### _helpers.css

Along with the base styles, we also provide some commonly used helper classes.

#### `.hidden`

The `hidden` class can be added to any element that you want to hide visually
and from screen readers. It could be an element that will be populated and
displayed later, or an element you will hide with JavaScript.

#### `.visually-hidden`

The `visually-hidden` class can be added to any element that you want to hide
visually, while still have its content accessible to screen readers.

#### `.invisible`

The `invisible` class can be added to any element that you want to hide
visually and from screen readers, but without affecting the layout.

As opposed to the `hidden` class that effectively removes the element from the
layout, the `invisible` class will simply make the element invisible while
keeping it in the flow and not affecting the positioning of the surrounding
content.

#### `.clearfix`

The `clearfix` class can be added to any element to ensure that it always fully
contains its floated children.

Over the years there have been many variants of the clearfix hack, but currently, we use the [micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/).

### _mqs.css

We include placeholder media queries to help you build up your mobile styles for
wider viewports and high-resolution displays. It's recommended that you adapt
these media queries based on the content of your site rather than mirroring the
fixed dimensions of specific devices.

If you do not want to take the _mobile first_ approach, you can simply edit or
remove these placeholder media queries. One possibility would be to work from
wide viewports down, and use `max-width` media queries instead (e.g.:
`@media only screen and (max-width: 480px)`).

### _print.css

Lastly, we provide some useful print styles that will optimize the printing
process, as well as make the printed pages easier to read.

At printing time, these styles will:

- strip all background colors, change the font color to black, and remove the
  `text-shadow` — done in order to help save printer ink and speed up the
  printing process
- underline and expand links to include the URL — done in order to allow users
  to know where to refer to<br>
  (exceptions to this are: the links that are
  [fragment identifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href),
  or use the
  [`javascript:` pseudo protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void#JavaScript_URIs))
- expand abbreviations to include the full description — done in order to allow
  users to know what the abbreviations stands for
- provide instructions on how browsers should break the content into pages and
  on [orphans/widows](https://en.wikipedia.org/wiki/Widows_and_orphans), namely,
  we instruct
  [supporting browsers](https://en.wikipedia.org/wiki/Comparison_of_layout_engines_%28Cascading_Style_Sheets%29#Grammar_and_rules)
  that they should:

  - prevent block quotations, preformatted text, images and table rows from
    being split onto two different pages
  - ensure that headings never appear on a different page than the text they
    are associated with
  - ensure that
    [orphans and widows](https://en.wikipedia.org/wiki/Widows_and_orphans) do
    [not appear on printed pages](https://css-tricks.com/almanac/properties/o/orphans/)

The print styles are included along with the other `css` to [avoid the
additional HTTP request](https://www.phpied.com/delay-loading-your-print-css/).
Also, they should always be included last, so that the other styles can be
overwritten.


## Browser support

We use the following browserlist configuration:

```
 "browserslist": [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead",
    "not IE 11"
  ],
```

[That configuration translates to this full list of browsers.](https://browserslist.dev/?q=PiAwLjUlLCBsYXN0IDIgdmVyc2lvbnMsIEZpcmVmb3ggRVNSLCBub3QgZGVhZCwgbm90IElFIDEx)

## Contributing

Anyone is welcome to [contribute](.github/CONTRIBUTING.md),
however, if you decide to get involved, please take a moment to review
the [guidelines](.github/CONTRIBUTING.md):

- [Bug reports](.github/CONTRIBUTING.md#bugs)
- [Feature requests](.github/CONTRIBUTING.md#features)
- [Pull requests](.github/CONTRIBUTING.md#pull-requests)

## License

The code is available under the [MIT license](LICENSE.txt).
