let coin = {
  state: 0,
  flip: function () {
    let flipperino = Math.random();
    if (flipperino <= 0.5) {
      return (this.state = 0);
    } else {
      return (this.state = 1);
    }
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
  },
  toString: function () {
    if (this.state === 0) {
      console.log("heads");
    } else {
      console.log("tails");
    }
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },
  toHTML: function () {
    let image = document.createElement("img");
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

coin.flip;
coin.toString;

for (i = 1; i <= 20; i++) {
  let numDiv = document.createElement("div");
  numDiv.append(i);
  document.body.append(numDiv);
}
