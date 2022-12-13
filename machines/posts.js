const actions = {
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
  FETCH: "fetch",
};

const initial = {
  loading: true,
  messages: "",
  error: "",
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.PENDING:
      return { ...state, loading: true };

    case actions.FETCH:
      return { ...state, loading: true };

    case actions.SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        message: action.message,
      };

    case actions.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: action.message,
      };
  }
};

/**
 * @author Karl-Johan Bailey
 * @created 12/12/2022
 * @desc Manage getting posts
 * @export actions
 * @export initial
 * @export reducer
 */

export default {
  actions,
  initial,
  reducer,
};
