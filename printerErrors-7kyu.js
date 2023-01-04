// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

const printerError = (s) => {
  let numError = 0;
  let numLabels = s.length;

  let arr = s.split("");

  for (let i = 0; i < s.length; i++) {
    switch (arr[i]) {
      case "n":
        numError += 1;
        break;
      case "o":
        numError += 1;
        break;
      case "p":
        numError += 1;
        break;
      case "q":
        numError += 1;
        break;
      case "r":
        numError += 1;
        break;
      case "s":
        numError += 1;
        break;
      case "t":
        numError += 1;
        break;
      case "u":
        numError += 1;
        break;
      case "v":
        numError += 1;
        break;
      case "w":
        numError += 1;
        break;
      case "x":
        numError += 1;
        break;
      case "y":
        numError += 1;
        break;
      case "z":
        numError += 1;
        break;
    }
  }
  return `${numError}/${numLabels}`;
};

console.log(printerError("aaabbbccczzz")); // '3/12'
