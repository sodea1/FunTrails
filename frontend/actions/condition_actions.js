import {fetchConditions} from '../util/condition_api_util';

export const RECEIVE_CONDITIONS = 'RECEIVE_CONDITIONS';

const receiveConditions = (conditions) => {
    return ({
        type: RECEIVE_CONDITIONS,
        conditions
    })
}

export const fetchAllConditions = () => {
    return (
        fetchConditions()
            .then(res => dispatch(receiveConditions(res)))
    )
}