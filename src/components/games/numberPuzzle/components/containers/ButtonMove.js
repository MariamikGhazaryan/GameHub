import { connect } from "react-redux";
import { MOVE } from "../../actions/actions";
import Button from "./../presentation/Button";

const mapDispatchToProps = (dispatch, { row, col, isPlaying }) => {
  return {
    onClick: () => {
      if (isPlaying) {
        dispatch({ type: MOVE, row, col });
      }
    }
  };
};

export default connect(
  () => {
    return {};
  },
  mapDispatchToProps
)(Button);
