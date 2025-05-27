import { createApp } from "vue";
import MyComponent from "./vue/MyComponent.vue";

function initVueWidget(targetSelector) {
  const el = document.querySelector(targetSelector);
  if (!el) return;
  createApp(MyComponent).mount(el);
}

export { initVueWidget };
