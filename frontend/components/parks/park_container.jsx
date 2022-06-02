import { connect } from "react-redux";
import { fetchPark, fetchAllParks } from "../../actions/park_actions";
import { fetchTrails } from "../../actions/trail_actions";
import Park from "./park";

const mapStateToProps = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.id],
    trails: state.entities.trails
});

const mapDispatchToProps = dispatch => ({
    fetchAllParks: () => dispatch(fetchAllParks()),
    fetchTrails: () => dispatch(fetchTrails())
});

export default connect(mapStateToProps, mapDispatchToProps)(Park);

