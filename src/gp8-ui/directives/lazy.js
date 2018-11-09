
// 监听滚动条的距离后，控制img去添加src属性

const lazy = (Vue) => {

    Vue.directive('abc', {
        bind (el, binding, VNode)  {
            VNode.context.message += '!'
            el.innerText = VNode.context.message
            // console.log(VNode.context)
        }
    })
    Vue.directive('abcd', {
        bind (el, binding, VNode)  {
           binding.value(
                VNode.context[el.getAttribute('text')]
               ,el.getAttribute('symbol')
            ) 
        }
    })


    Vue.directive('gp8-lazy', {
        bind (el, binding) {
            el.handler = judgeDistance.bind(el)
            el.setAttribute('data-src', binding.value)
            window.addEventListener('scroll', el.handler)
        },
        inserted (el, binding) {
            el.style.backgroundColor = randomColor()
            el.handler()
        },
        unbind (el) {
            window.removeEventListener('scroll', el.handler)
        }
    })
    function judgeDistance() {
        let page = this.offsetTop
        let scrollTop = document.documentElement.scrollTop
        let clientHeight = document.documentElement.clientHeight
        let distance = 50
        // console.log(this)
        if ( page - ( scrollTop + clientHeight + distance) <= 0 && !this.src) {
            this.src = this.getAttribute('data-src')
        } 
    }

    function randomColor() {
        return '#'+'0123456789abcdef'.split('').map(function(v,i,a){
            return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
    }

}

export default lazy