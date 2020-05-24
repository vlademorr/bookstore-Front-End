import React from "react";
import "./spinner.css";

const Spinner = () => {
    return (
            <div className="cssload-triangles">
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
                <h5>LOADING</h5>
            </div>
    )
};

export default Spinner;