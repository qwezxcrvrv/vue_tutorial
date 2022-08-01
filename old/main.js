import { createApp } from 'vue'
import App from './App.vue'

//createApp 은 App의 정보를 Vue instance definition object로 변환하여 app variable로 만듬
const app = createApp(App)
app.mount('#app')