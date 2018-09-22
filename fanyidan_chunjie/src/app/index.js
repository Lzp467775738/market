require("./index.scss")
var foreword = require("./foreword");


window.render = () => {
    foreword.init();
    setTimeout(() => {
        $(".loading")[0].style.display = "none"
    }, 2000);
}

render()