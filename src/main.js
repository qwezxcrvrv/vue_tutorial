import { createApp } from "vue";
import App from "./App.vue";
//App.vue을 가져 온 후 그 정보들이 App의 이름으로 사용이됨

import "./assets/style.css";

createApp(App).mount("#app");
//App의 내용을 #app에 적용함
//코드를 모듈,재사용 및 간편한 관리를 위해서 App.vue을 따로 만들고 그 아래 components폴더에 App.vue의 세부사항 코드들을 따로 관리함