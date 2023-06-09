<template>
  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png">

    <Counter />
    <CounterSquer />
    <CounterButtons />

  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import CounterSquer from '@/components/CounterSquer.vue'
import CounterButtons from '@/components/CounterButtons.vue'


export default {
  name: 'HomeView',
  components: {
    Counter,
    CounterSquer,
    CounterButtons
  }

}
</script>
<style>
div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.counter {
  font-size: 80px;
}
.buttons button {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  border: none;
  font-size: 40px;
  margin: 0 5px;

}

/* hover button animation */
.buttons button:hover {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}


</style>
