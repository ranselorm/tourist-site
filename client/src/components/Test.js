import { Fragment } from "react";

function Test() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-3">
          <div className="d-none d-md-block">
            <div className="card shadow-sm mt-3">
              <div className="card-header">
                <i className="far fa-smile"></i> Amenities
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">+2334884749349</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Test;
