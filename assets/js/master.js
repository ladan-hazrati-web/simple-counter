let flag = 0
let _count = document.getElementById('_count')
function _counter(x) {
    if (x == '-') {
        flag--
    } else if (x == '+') {
        flag++
    } else {
        flag = 0
    }
    _count.innerText = flag
    if (flag > 0) {
        _count.style.color = 'green'
    } else if (flag < 0) {
        _count.style.color = 'red'
    } else {
        _count.style.color = ' hsl(208.8, 61%, 16.1%)'
    }
}