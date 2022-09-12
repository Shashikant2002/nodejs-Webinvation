import React from "react";

const ShowProduct = () => {
  return (
    <>
      {/* All Data Here  */}

      <div className="showData">
        <div className="container">
          <div className="heading">
            <div className="attribute">
              <h3>SNo.</h3>
            </div>
            <div className="attribute">
              <h3>Title</h3>
            </div>
            <div className="attribute">
              <h3>Live Link</h3>
            </div>
            <div className="attribute">
              <h3>Image</h3>
            </div>
            <div className="attribute">
              <h3>Category</h3>
            </div>
            <div className="attribute">
              <h3>Update</h3>
            </div>
            <div className="attribute">
              <h3>Delete</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
