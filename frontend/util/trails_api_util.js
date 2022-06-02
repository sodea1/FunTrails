
export const fetchTrail = trailId => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/trails/${trailId}`
        })
    );
};

export const fetchTrails = () => {
    return (
        $.ajax({
            method: 'GET',
            url: '/api/trails'
        })
    ) 
}