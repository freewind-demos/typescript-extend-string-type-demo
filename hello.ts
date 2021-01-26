import './global';

String.prototype.padZero = function (length: number) {
  let d = String(this)
  while (d.length < length) {
    d = '0' + d;
  }
  return d;
};

console.log('hi'.padZero(5))
