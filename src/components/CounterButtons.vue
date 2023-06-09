<template lang="">
    
    <div class="buttons">
      <button @click="$store.dispatch('decrement')" style="background-color: red;">-</button>
      <button @click="$store.dispatch('increment')" style="background-color: #41b883;">+</button>
    </div>
</template>
<script>
export default {
    name: 'CounterButtons',
}
</script>
<style lang="">
    
</style>