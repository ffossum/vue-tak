
let move;

const scrollMiddleware = {
  onInit(state) {
    move = state.selectedMove;
  },
  onMutation(mutation, state) {
    const selectedMove = state.selectedMove || 1;

    if (move !== selectedMove) {
      move = selectedMove;

      const parentEl = document.querySelector('.move-list');
      const moveEl = document.querySelector(`[data-move-number="${move}"]`);

      if (parentEl && moveEl) {
        const parentHeight = parentEl.offsetHeight;

        const relativeTop = moveEl.offsetTop - parentEl.offsetTop;
        parentEl.scrollTop = relativeTop - parentHeight / 2;
      }
    }
  },
};

export default scrollMiddleware;
