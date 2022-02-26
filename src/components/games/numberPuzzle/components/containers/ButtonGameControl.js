import React from "react";
import {connect} from "react-redux";
import {PLAY, RESET} from "../../actions/actions.js";

const create_button = (act, label) => {
  // eslint-disable-next-line react/display-name
    return ({dispatch}) => {
        // eslint-disable-next-line react/display-name
        return (
            <button
                className="btn"
                onClick={() => {
                    dispatch({type: act});
                }}
            >
                {label}
            </button>
        );
    };
};

export const ButtonPlay = connect()(create_button(PLAY, "Play"));
export const ButtonReset = connect()(create_button(RESET, "Reset"));
