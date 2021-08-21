//action type
const OPEN_MODAL = "openModal";
const CLOSE_MODAL = "closeModal";
//action creator
export const handleOpenModal = () => ({
  type: OPEN_MODAL,
});
export const handleCloseModal = () => ({
  type: CLOSE_MODAL,
});
//initial state
const initialState = {
  openModal: false,
};
//reducer
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openModal: true };
    case CLOSE_MODAL:
      return { ...state, openModal: false };
    default:
      return state;
  }
};
