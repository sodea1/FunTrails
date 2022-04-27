import * as TrailApiUtil from "../util/trails_api_util";

export const RECEIVE_TRAIL = 'RECEIVE_TRAIL';

const receiveTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
});

export const fetchTrail = trailId => dispatch => {
    return (
        TrailApiUtil.fetchTrail(trailId)
            .then(trail => dispatch(receiveTrail(trail)))
    )
};