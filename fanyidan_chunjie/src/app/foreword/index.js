require("./index.scss");
var utils = require("./../lib/utils.js")
var tmpl = require("./index.html");
function init(){
  $("#main").append(tmpl());
  utils.showImg($(".port"))
}
// var a = function (b) { 
//   debugger
// }
// a ($(".loading"))
module.exports = {
  init: init
}