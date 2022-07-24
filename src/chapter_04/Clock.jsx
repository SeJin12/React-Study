import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>hi, React!</h1>
            <h2>Current Time : {new Date().getSeconds()}</h2>
        </div>
    );
}

export default Clock;