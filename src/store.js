/* eslint no-param-reassign: 0 */

import Vue from 'vue';
import Vuex from 'vuex';
import {
  min,
  max,
  size,
} from 'lodash';
import scrollMiddleware from './scrollMiddleware';

Vue.use(Vuex);

const initialState = {
  model: {},
  selectedMove: 0,
  error: null,
};

const mutations = {
  UPDATE_MODEL(state, model) {
    state.model = model;
    state.selectedMove = 0;
  },
  PARSE_ERROR(state, msg) {
    state.model = {};
    state.error = msg;
  },
  NEXT_MOVE(state) {
    state.selectedMove = min([state.selectedMove + 1, size(state.model.moves)]);
  },
  PREVIOUS_MOVE(state) {
    state.selectedMove = max([state.selectedMove - 1, 0]);
  },
  GO_TO_MOVE(state, moveNumber) {
    state.selectedMove = moveNumber;
  },
  GO_TO_END(state) {
    state.selectedMove = size(state.model.moves);
  },
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  middlewares: [scrollMiddleware],
});
