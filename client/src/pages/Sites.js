import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SitesContext } from "../store/SitesContext";

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
    <>
      <header className="jumbotron text-dark rounded-0 d-none d-md-block hero-section">
        <div className="container">
          <div className="jumbotron-text mt-5 text-light jumbo">
            <h1 className="display-3 jumbotronText">Welcome to YelpCamp!!</h1>
            <p className="lead jumbotronText">
              View campgrounds from all over the world
            </p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          {sites &&
            sites.map((site) => (
              <div
                className="card indexCards shadow border-0 mt-4 mx-auto"
                style={{ width: "16rem" }}
              >
                <Link to={site._id}>
                  <img
                    src={site.image}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </Link>
                <div className="card-body text-center">
                  <h4 className="card-text ">{site.title}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sites;
