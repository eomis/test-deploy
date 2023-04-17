import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { AladinRepoProxy } from '@tencent/aladin-repo-proxy'

new AladinRepoProxy()
createApp(App).mount('#app')