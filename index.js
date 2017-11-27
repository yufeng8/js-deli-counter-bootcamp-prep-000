var katzDeli = [];

var counter = 0
function takeANumber(KatzDeliLine) {
  //KatzDeliLine.push(Ada);
  counter += 1
  KatzDeliLine.push(counter)
  
  return `Welcome, You are number ${counter} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var array = []
    for (let i = 0; i < katzDeliLine.length; i++) {
      var j = i + 1
      var s = `${j}. ${katzDeliLine[i]}`
      array.push(s)
    }
    return `The line is currently: ${array.join(', ')}`
  }
