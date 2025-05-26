class MyComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <style>
          .sample-container {
            max-width: 400px;
            margin: 0 auto;
          }

          input[type="text"],
          button {
            display: block;
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
          }
        </style>
        <div class="sample-container">
          <input type="text" id="username" name="username" placeholder="sample text">
          <button>SAMPLE BUTTON</button>
        </div>
    `;
    shadow.appendChild(wrapper);
  }
}

customElements.define("my-component", MyComponent);
