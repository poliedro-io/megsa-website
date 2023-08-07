import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll, {
    easingFunction: t => (--t)*t*t+1,
    duration: 600,
})

export default {}
