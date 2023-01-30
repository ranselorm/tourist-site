import { createContext, useReducer } from "react";

export const SitesContext = createContext();

const initialState = {
  sites: [],
};

export const SiteReducer = (state, action) => {
  switch (action.type) {
    case "SET_SITES":
      return {
        sites: action.payload,
      };

    case "CREATE_SITE":
      return {
        sites: [...state.sites, action.payload],
      };

    case "DELETE_SITE":
      return {
        sites: state.sites.filter((site) => site.id !== action.payload._id),
      };

    default:
      return state;
  }
};

export const SitesContextProvider = (props) => {
  const [state, dispatch] = useReducer(SiteReducer, initialState);
  console.log("sites:", state.sites);

  return (
    <SitesContext.Provider value={{ sites: state.sites, dispatch }}>
      {props.children}
    </SitesContext.Provider>
  );
};
