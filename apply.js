Function.prototype.myApply = function (context, args) {
    if (typeof this !== 'function') {
      alert(this + "You can not call not a function");
      return;
    }
   
    if (!Array.isArray(args)) {
        alert(this + "Arguments must be array");
        return;
      }

    
    context.tempKey = this;
    context.tempKey(...args);
  };

function show() {
    console.log("object" + this.name);
}
let obj={
    name: "objApply"
}
let someFunc = show.myApply(obj);
console.log(someFunc)