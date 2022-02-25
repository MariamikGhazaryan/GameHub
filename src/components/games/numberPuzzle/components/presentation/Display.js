import React from "react";

import {Badge} from "react-bootstrap";

const Display = props => {
    return (
        <strong>
            <span className="display-title">{props.label}</span>
            <Badge>{props.value}</Badge>
        </strong>
    );
};

export default Display;
