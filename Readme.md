# random-border-style

  Return a random CSS border-style

## Installation

    $ component install yyolk/random-border-style

## Usage

```js
var RandomBorderStyle = require("random-border-style");
function changeBodyBorder(){
  document.getElementById("body").style.border = "3px " + RandomBorderStyle() + " red";
}
changeBodyBorder();
```

## License

  MIT
