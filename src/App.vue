<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
.header {
  margin-top: 50px;
}
@media screen and (max-width: 768px) {
  .header {
    margin-top: 100px;
  }
}
</style>
