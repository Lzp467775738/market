const showImg = (dom) => {
    let port = dom;
    port.each(function () {
        let that = this
        let length = that.childElementCount
        for (let i = 0; i < length - 1; i++) {

            let time = that.children[i].getAttribute("data-time")
            let over = that.children[i].getAttribute("data-over")
            let stop = that.children[i].getAttribute("data-stop")
            var timer = setInterval(() => {
                that.children[i].style.display = "block"
                debugger
            }, time)
            clearInterval(timer)
        }
    })
}

module.exports = {
    showImg: showImg
}