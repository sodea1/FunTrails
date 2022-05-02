import { connect } from "react-redux";
import Review from "./review";

const mapStateToProps = state => ({
    trails: state.entities.trails
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);