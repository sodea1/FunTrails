import * as TrailApiUtil from "../util/trails_api_util";

export const RECEIVE_TRAIL = 'RECEIVE_TRAIL';
export const RECEIVE_TRAILS = 'RECEIVE_TRAILS';

const receiveTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
});

const receiveTrails = (trails) => ({
    type: RECEIVE_TRAILS,
    trails
});

export const fetchTrail = trailId => dispatch => {
    return (
        TrailApiUtil.fetchTrail(trailId)
            .then(trail => dispatch(receiveTrail(trail)))
    )
};

export const fetchTrails = () => dispatch => {
    return (
        TrailApiUtil.fetchTrails()
            .then(trails => dispatch(receiveTrails(trails)))
    )
};