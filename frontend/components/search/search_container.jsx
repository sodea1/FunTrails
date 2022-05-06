import { connect } from "react-redux";
import Search from "./search";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    trails: state.entities.trails
});

// const mapDispatchToProps = (dispatch) => ({

// });

export default withRouter(connect(mapStateToProps, null)(Search));