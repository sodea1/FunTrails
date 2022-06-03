import { connect } from "react-redux";
import { fetchPark } from "../../actions/park_actions";
import { fetchTrails } from "../../actions/trail_actions";
import Park from "./park";

const mapStateToProps = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.id],
    trails: state.entities.trails
});

const mapDispatchToProps = dispatch => ({
    // fetchParks: () => dispatch(fetchParks()),
    fetchPark: (parkId) => dispatch(fetchPark(parkId)),
    fetchTrails: () => dispatch(fetchTrails())
});

export default connect(mapStateToProps, mapDispatchToProps)(Park);

