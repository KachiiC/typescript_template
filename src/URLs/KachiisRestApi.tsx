const endpoint_url = "https://kachiis-rest.herokuapp.com"

export const KachiiRestApi = (type: string, endpoint: string) => {

    return `${endpoint_url}/${type}/${endpoint}`
}

