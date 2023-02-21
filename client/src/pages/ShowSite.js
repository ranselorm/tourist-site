import Delete from "@mui/icons-material/Delete";
import FmdGoodTwoToneIcon from "@mui/icons-material/FmdGoodTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import Person3TwoToneIcon from "@mui/icons-material/Person3TwoTone";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SitesContext } from "../store/SitesContext";

const ShowSite = () => {
  const [site, setSite] = useState(null);
  const params = useParams();
  const siteId = params.siteId;
  const { dispatch } = useContext(SitesContext);

  const username = "randy";

  const deleteSiteHandler = async () => {
    const response = await fetch("/api/campgrounds/" + siteId, {
      method: "DELETE",
      headers: { "Content-Type": "applocation/json" },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("Could not delete resource");
    }

    dispatch({ type: "DELETE_SITE", payload: json });
  };

  useEffect(() => {
    const getSite = async () => {
      const response = await fetch("/api/campgrounds/" + siteId);
      const json = await response.json();

      if (!response.ok) {
        console.log("error");
      }

      if (response.ok) {
        setSite(json);
      }
    };
    getSite();
  }, []);
  return (
    <>
      {site && (
        <div className="">
          <div className="card">
            <div className="row">
              <div className="col-md-3 show-text">
                <h4 className="text-center">{site.campground.title}</h4>
                <div className="card-header">
                  <Person3TwoToneIcon />
                  Author
                </div>
                <ul class="list-group list-group-flush">
                  <li className="list-group-item">ranselorm</li>
                </ul>
                <div className="d-none d-md-block">
                  <div className="card shadow-sm mt-3">
                    <div className="card-header">
                      <RoomTwoToneIcon />
                      Location
                    </div>
                    <ul class="list-group list-group-flush">
                      <li className="list-group-item">
                        {site.campground.location}
                        <br></br>
                        Western Region
                      </li>
                    </ul>
                  </div>

                  <div className="card-header mt-4">
                    <DescriptionTwoToneIcon />
                    Description
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      {site.campground.description}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="card mb-3 mx-auto shadow border-0">
                  <div className="show-main">
                    <img
                      src={site.campground.image}
                      alt=""
                      className="img-fluid mt-3"
                      width="1200"
                    />

                    <div className="show-buttons">
                      <EditTwoToneIcon /> Edit
                      <Delete onClick={deleteSiteHandler} />
                      {/* <button className="danger" onClick={deleteSiteHandler}>
                        Delete
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowSite;
