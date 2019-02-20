DATA_objects = [{
  "name": "z",
  "value": 5,
  "position": ["127px", "217px"],
  "type": "math-variable",
  "id": "0"
}, {
  "name": "f",
  "expression": "2y+1",
  "latex": "2y+1",
  "position": ["118px", "95px"],
  "type": "math-function",
  "id": "1"
}, {
  "name": "g",
  "expression": "10x^(2-y)",
  "latex": "10x^{2-y}",
  "position": ["104px", "152px"],
  "type": "math-function",
  "id": "2"
}, {
  "inputHeaders": ["x", "y", "a", "b"],
  "inputTable": [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7],
    [5, 6, 7, 8]
  ],
  "outputHeaders": ["f", "g"],
  "outputTable": [
    ["5", "10"],
    ["7", "5"],
    ["9", "1.111"],
    ["11", "0.1563"],
    ["13", "0.016"]
  ],
  "position": ["293px", "83px"],
  "type": "math-table",
  "id": "3"
}, {
  "position": ["136px", "344px"],
  "width": 700,
  "height": 500,
  "type": "math-graph",
  "id": "4"
}, {
  "value": "The web calculator.\n\nRight click anywhere to see different options. Drag things around. Saves are logged to the console (ctrl + shift + i).\n\nAt this point in time, it's only functions and tables. That being said, your functions can have as many variables as you'd like to put into the table.\n\nNot all functions will work as I've needed to parse latex into ascii for evaluations.\n\nBelow is the start of graphs but they're not working nicely yet.",
  "width": "731px",
  "height": "242px",
  "position": ["524px", "29px"],
  "type": "base-text",
  "id": "5"
}]