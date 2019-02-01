$(function () {
    // back-to-top显示隐藏和减速业务的实现

    var backToTop = document.getElementById('back-to-top')
    // const pageHeight = document.documentElement.clientHeight
    // console.log(pageHeight)

    // 将 back-to-top 的显示隐藏进行封装
    function showBackToTop () {
        backToTop.style.visibility = 'visible'
    }

    function hideBackToTop () {
        backToTop.style.visibility = 'hidden'
    }

    window.onscroll = function () {
        var backHeight = document.documentElement.scrollTop
        if (backHeight > 0) {
            showBackToTop()
            $(backToTop).css({
                opacity: '1'
            })
        } else {
            $(backToTop).css({
                opacity: '0'
            })
            setTimeout(hideBackToTop, 1000)
        }
    }

    // 鼠标点击业务
    const $search = $('#search')
    const placeholder = $search.prop('placeholder')

    $search.on('focus', function () {
        $(this).prop('placeholder', '')
    }).on('blur', function () {
        $(this).prop('placeholder', placeholder)
    })

    function backTop () {
        let backHeight = document.documentElement.scrollTop
        let speed = backHeight / 5
        if (speed < 10) {
            clearInterval(window.timer)
        }
        document.documentElement.scrollTop = backHeight - speed
    }

    backToTop.onclick = function () {
        window.timer = setInterval(backTop, 80)
    }
})