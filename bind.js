Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
      alert(this + "You can not bind not a function");
      return;
    }
   
    context.tempKey = this;
    return function () {
        return context.tempKey(...args);
      };
  };

function show() {
    console.log("object" + this.name);
}
let obj={
    name: "objBind"
}
let someFunc = show.myBind(obj);
console.log(someFunc())