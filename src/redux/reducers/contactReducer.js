const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return action.payload;
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "UPDATE_CONTACT":
      // eslint-disable-next-line no-case-declarations
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      // eslint-disable-next-line no-case-declarations
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      return filterContacts;
    default:
      return state;
  }
};

export default contactReducer;
