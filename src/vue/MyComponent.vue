<template>
  <div class="sample-container">
    <input
      type="text"
      id="username"
      name="username"
      placeholder="sample text"
    />
    <button>{{ text }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "SAMPLE BUTTON",
    };
  },
};
</script>

<style scoped>
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
