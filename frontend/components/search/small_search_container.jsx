import { connect } from "react-redux";
import SmallSearch from "./search";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history
});

export default withRouter(connect(mapStateToProps, null)(SmallSearch));