import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGIN] (state, login) {
    state.login = login
  },
  [types.SET_PLAY] (state, play) {
    state.play = play
  },
  [types.SET_SLIDESHOW] (state, slideShow) {
    state.slideShow = slideShow
  }
}

export default mutations
