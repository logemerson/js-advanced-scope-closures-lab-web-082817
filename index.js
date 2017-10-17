function produceDrivingRange(blockRange) {
  return function(beginBlock, endBlock) {
    let origin = parseInt(beginBlock);
    let destination = parseInt(endBlock);

    //this could be refactored with a 'difference' variable
    if (origin >= destination) {
      if (origin - destination > blockRange) {
        return `${origin - destination - blockRange} blocks out of range`;
      } else {
        return `within range by ${blockRange - (origin - destination)}`;
      }
    } else if (destination - origin > blockRange) {
      return `${destination - origin - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - (destination - origin)}`;
    }
  };
}

function produceTipCalculator(percentTip) {
  return function(fare) {
    return fare * percentTip;
  };
}

function createDriver(name) {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}
