import { createStore } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  state () {
    return {
      count: 1
    }
  },
  strict: debug,
})

export default store;