import { connect } from "react-redux";
import { fetchTrailReviews } from "../../actions/review_actions";
import { fetchTrails } from "../../actions/trail_actions";
import { fetchParks } from "../../actions/park_actions";
import Trail from "./trail";
import { openModal } from "../../actions/modal_actions";
import { fetchWeather } from "../../actions/weather_actions";

const mapStateToProps = (state, ownProps) => ({
    trails: Object.values(state.entities.trails),
    trail: state.entities.trails[ownProps.match.params.id],
    entity: state.entities.trails[ownProps.match.params.id],
    reviews: Object.values(state.entities.reviews),
    currUserId: state.session.currUserId,
    trailId: ownProps.match.params.id,
    parks: state.entities.parks,
    history: ownProps.history,
    // lat: state.entities.trails[ownProps.match.params.id],
    // long: state.entities.trails[ownProps.match.params.id],
    forecast: state.entities.weather.forecast
});

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    fetchParks: () => dispatch(fetchParks()),
    fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId)),
    openModal: formType => dispatch(openModal(formType)),
    fetchWeather: (coords) => dispatch(fetchWeather(coords))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trail);