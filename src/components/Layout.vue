<template>
  <div class="layout">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .content {
      flex: 1;
      overflow: auto;
    }
  }

</style>