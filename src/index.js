
exports.min = function min (array) {
  return Math.min(...array);
}

exports.max = function max (array) {
  return Math.max(...array);
}

exports.avg = function avg (array) {
    let sum = 0;
    let l = array.length;
    for(let i =0; i<array.length; i++){
        sum+=array[i]
    }
    let avg = sum/l;
  return avg;
}
