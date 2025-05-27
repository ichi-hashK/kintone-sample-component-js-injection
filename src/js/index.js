(() => {
  "use strict";
  kintone.events.on("app.record.detail.show", (event) => {
    const myComponent = document.createElement("my-component");

    const headerElement = kintone.app.record.getHeaderMenuSpaceElement();
    headerElement.appendChild(myComponent);
  });
})();
