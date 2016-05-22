import TAK from 'tak';

export function updateModel({ dispatch }, e) {
  try {
    dispatch('UPDATE_MODEL', TAK.ptnToJson(e.target.value));
  } catch (err) {
    dispatch('PARSE_ERROR', err.message);
  }
}

export function nextMove({ dispatch }) {
  dispatch('NEXT_MOVE');
}

export function previousMove({ dispatch }) {
  dispatch('PREVIOUS_MOVE');
}

export function goToBeginning({ dispatch }) {
  dispatch('GO_TO_MOVE', 0);
}

export function goToMove({ dispatch }, moveNumber) {
  dispatch('GO_TO_MOVE', moveNumber);
}

export function goToEnd({ dispatch }) {
  dispatch('GO_TO_END');
}
