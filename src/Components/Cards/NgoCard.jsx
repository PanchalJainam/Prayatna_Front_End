import React from "react";

const NgoCard = ({ ngo }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {ngo.map((curNgo) => {
            const { _id, ngo_name, activity, address } = curNgo;
            return (
              <div className="col col-sm-6 col-lg-4">
                <div class="card mb-3" key={_id}>
                  {/* <img className="ngo_img" src={pic} alt="Card" /> */}
                  <div class="card-body">
                    <h4 class="card-title">{ngo_name}</h4>
                    <p class="card-text">{activity}</p>
                    <p class="card-text">{address}</p>
                    <a href="/request" class="btn btn-primary">
                      Send Request
                    </a>
                    <a href="/request" class="btn btn-primary ms-1">
                      Report to Ngo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NgoCard;
