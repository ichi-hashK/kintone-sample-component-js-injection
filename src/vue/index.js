import { createApp } from "vue";
import MyComponent from "./MyComponent.vue";

(() => {
  "use strict";
  kintone.events.on("app.record.detail.show", (event) => {
    const headerElement = kintone.app.record.getHeaderMenuSpaceElement();
    if (!headerElement) return;
    createApp(MyComponent).mount(headerElement);
  });
})();
