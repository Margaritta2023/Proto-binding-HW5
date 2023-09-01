Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function') {
      alert(this + "You can not call not a function");
      return;
    }
    context.tempKey = this;
    context.tempKey(...args);
  };

function show() {
    console.log("object" + this.name);
}
let obj={
    name: "objCall"
}
let someFunc = show.myCall(obj);
console.log(someFunc)