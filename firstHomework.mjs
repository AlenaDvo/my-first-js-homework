let something = {
  colors: ["red", "blue", "green", "violet", "white"],
  hasManyColors : function() {
    return this.colors.length > 4;
  }
};
console.log(something.hasManyColors());
