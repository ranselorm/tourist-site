import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  user: null,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  console.log("user:", state.user);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
