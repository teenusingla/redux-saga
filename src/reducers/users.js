import { Types } from "../actions/users";

const INITIAL_STATES = { items: [] };

export default function users(state = INITIAL_STATES, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return { items: action.payload.items };
    default:
      return state;
  }
}
