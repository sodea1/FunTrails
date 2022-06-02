import { connect } from "react-redux";
import { fetchPark } from "../../actions/park_actions";
import Park from "./park";

const mapStateToProps = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
    fetchPark: parkId => dispatch(fetchPark(parkId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Park);

