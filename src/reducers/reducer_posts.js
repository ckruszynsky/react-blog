import { FETCH_POSTS, SAVE_POST } from "../actions";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:      
      return _.mapKeys(action.payload.data, "id");      
    default:
      return state;
  }
};
