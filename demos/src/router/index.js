import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import MnistCnn from '../components/models/MnistCnn'
import MnistVae from '../components/models/MnistVae'
import Resnet50 from '../components/models/Resnet50'
import InceptionV3 from '../components/models/InceptionV3'
import ImdbBidirectionalLstm from '../components/models/ImdbBidirectionalLstm'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/mnist-cnn', component: MnistCnn },
    { path: '/mnist-vae', component: MnistVae },
    { path: '/resnet50', component: Resnet50 },
    { path: '/inception-v3', component: InceptionV3 },
    { path: '/imdb-bidirectional-lstm', component: ImdbBidirectionalLstm }
  ]
})

export default router
