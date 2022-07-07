import * as ParkApiUtil from "../util/parks_api_util";

export const RECEIVE_ALL_PARKS = 'RECEIVE_ALL_PARKS';
export const RECEIVE_PARK = 'RECEIVE_PARK';

const receiveParks = parks => ({
    type: RECEIVE_ALL_PARKS,
    parks
});

const receivePark = park => ({
    type: RECEIVE_PARK,
    park
});

export const fetchParks = () => dispatch => {
    return ParkApiUtil.fetchParks()
        .then(res => dispatch(receiveParks(res)))
}

export const fetchPark = parkId => dispatch => {
    return ParkApiUtil.fetchPark(parkId)
        .then(res => dispatch(receivePark(res)))
}