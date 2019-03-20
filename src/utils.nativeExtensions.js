
export function enableLogMap() {

  // TODO: Use symbol to extend native prototype

  Array.prototype.logMap = function logMapCreator(callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {

      arr.push(callback(this[i], i, this));

      console.log('Mapped Item: [ ', this[i], ' ]', 'index: ', i, 'arr status: ', arr);
    }
    return arr;
  };
}

export function overrideNativeMap() {

  // TODO: Use symbol to extend native prototype

  Array.prototype.map = function logMapCreator(callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {

      arr.push(callback(this[i], i, this));

      console.log('Mapped Item: [ ', this[i], ' ]', 'index: ', i, 'arr status: ', arr);
    }
    return arr;
  };
}
