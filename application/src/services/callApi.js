const BASE_API_URL = 'http://localhost:4000'


export const getRepForState = (state) => {
    return fetch(`${BASE_API_URL}/representatives/${state}`)
}

export const getSenatorForState = (state) => {
    return fetch(`${BASE_API_URL}/senators/${state}`)
}