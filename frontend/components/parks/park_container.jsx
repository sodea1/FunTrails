import { connect } from "react-redux";
import { fetchPark, fetchParks } from "../../actions/park_actions";
import { fetchTrails } from "../../actions/trail_actions";
import Park from "./park";

const mapStateToProps = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.id],
    parks: state.entities.parks,
    trails: state.entities.trails,
    history: ownProps.history
});

const mapDispatchToProps = dispatch => ({
    fetchParks: () => dispatch(fetchParks()),
    fetchTrails: () => dispatch(fetchTrails())
});

export default connect(mapStateToProps, mapDispatchToProps)(Park);

