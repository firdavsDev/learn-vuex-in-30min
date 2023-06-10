import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // state is a single source of truth
    // as data()  in component
    // state is reactive
    // we can get state in component by using $store.state
    counter: 0
  },
  getters: {
    // getters is a function that get state
    // we can get state in component by using $store.getters.getterName
    // getters can be used for computed properties
    // getters can be used for filter
    // getters can be used for mapGetters

    SquaredCounter(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    // mutations is a function that change state
    // we can set state in component by using $store.commit('mutationName')
    // mutations must be synchronous. If you want to do asynchronous, use actions

    increment(state, randomNumber) {
      state.counter += randomNumber;
    },
    decrement(state,randomNumber) {
      state.counter -= randomNumber;
    }
  },
  actions: {
    // actions is a function that commit mutations
    // we can set state in component by using $store.dispatch('actionName')
    // actions can be asynchronous. If you want to do synchronous, use mutations
    // actions can commit mutations

    increment(context) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {

      context.commit('increment', response.data)
      })
    },

    decrement(context) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {

      context.commit('decrement', response.data)
      })
    }

  },
  modules: {
    // modules is a function that split store into multiple modules
    // we can set state in component by using $store.state.moduleName.stateName
    // we can set state in component by using $store.getters['moduleName/getterName']
    // we can set state in component by using $store.commit('moduleName/mutationName')
    // we can set state in component by using $store.dispatch('moduleName/actionName')

    // modules can be nested modules
  }
})



/*

What is the difference between Vuex actions and mutations? in vuejs: 

In Vue.js, Vuex is a state management library that provides a centralized store for managing the state of an application. Actions and mutations are two important concepts in Vuex.

Mutations are functions that are responsible for changing the state in the store. They are synchronous and can only modify the state, not read it. Mutations are typically called from actions.

Actions are functions that can perform asynchronous operations and then commit mutations to change the state in the store. They can also dispatch other actions. Actions are typically called from components.

The main difference between actions and mutations is that mutations are synchronous and can only modify the state, while actions can be asynchronous and can perform any operation before committing mutations.

In summary, mutations are used to modify the state in the store, while actions are used to perform asynchronous operations and then commit mutations to change the state.
  
*/