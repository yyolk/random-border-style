borderStyles = [
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset"
];

/**
 * Expose `RandomBorderStyle`.
 */

module.exports = function() {
  return borderStyles[Math.floor(Math.random()*borderStyles.length)];
}