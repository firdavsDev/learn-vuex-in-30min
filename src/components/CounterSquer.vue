<template lang="">
  <div>
    {{ $store.state.counter }}
    <sup>2</sup> = {{ $store.getters.SquaredCounter }}
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
