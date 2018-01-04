import * as types from './mutation-types'

export const all = function ({commit}, val) {
  commit(types.SET_LOGIN, val.login)
  commit(types.SET_PLAY, val.play)
}
