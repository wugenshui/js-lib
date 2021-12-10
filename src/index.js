import bar from "./bar.js";

// 自定义对象
var myObject = {}

myObject.bar = bar;

myObject.foo = () => {
  console.log("foo");
};

window.myObject = myObject;
