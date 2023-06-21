import React from "react";

const Avatar = () => {

    return (
        <div className="invisible w-0 h-0 md:visible md:w-full md:h-full">
            <div className="md:w-32 mask mask-circle">
                <img src='./assets/images/me-john-wick.png' alt="me johnwick" />
            </div>  
        </div>
    );
};

export default Avatar;