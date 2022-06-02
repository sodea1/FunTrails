import { connect } from "react-redux";
import { fetchPark, fetchAllParks } from "../../actions/park_actions";
import Park from "./park";

const mapStateToProps = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
    fetchAllParks: () => dispatch(fetchAllParks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Park);

