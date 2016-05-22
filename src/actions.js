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

export function goToMove({ dispatch }, moveNumber) {
  dispatch('GO_TO_MOVE', moveNumber);
}
