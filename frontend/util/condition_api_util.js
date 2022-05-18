export const fetchConditions = () => {
    return (
        $.ajax({
            method: 'GET',
            url: '/api/conditions'
        })
    )
}