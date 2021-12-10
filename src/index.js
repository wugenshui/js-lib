import bar from "./bar.js";
import pro from "./promise"
import asy from "./async"

pro()
asy()

// 自定义对象
var myObject = {}

myObject.bar = bar;

myObject.foo = () => {
  console.log("foo");
};

window.myObject = myObject;
