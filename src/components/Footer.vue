<template>
  <footer class="footer">
    <button @click="goto('/')">Home</button>
    <button>Global</button>
    <button @click="goto('/newpost')">Post</button>
    <button>Notification</button>
    <button>Profile</button>
  </footer>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>