import { useEffect, useContext, useState } from "react";
import { SitesContext } from "../store/SitesContext";
import SiteDetail from "../components/SiteDetail";

const Sites = () => {
  const { dispatch, sites } = useContext(SitesContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/campgrounds");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_SITES", payload: json });
        console.log(json);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <h1>Tourist Sites in Ghana</h1>
      <div className="sites">
        {sites &&
          sites.map((site) => <SiteDetail key={site._id} site={site} />)}
      </div>
    </div>
  );
};

export default Sites;
