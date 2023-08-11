const API_BASE_URL = "http://localhost:8080";

export function call(api, method, request) {

    let headers = new Headers({
        "Content-Type": "application/json",
    });
    
    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if (method === 'GET') {
        if (request) {
            const queryParam = request;
            const keys = Object.keys(queryParam);
            let queryString = '?';
            for (const key of keys) {
                if (queryParam[key] !== undefined && queryParam[key] !== null) {
                if (queryString.length > 1) {
                    queryString = queryString.concat('&');
                }
        
                queryString = queryString
                    .concat(key)
                    .concat('=')
                    .concat(encodeURIComponent(queryParam[key]));
                }
            }
            options.url = options.url + queryString
        }
        return fetch(options.url, options).then((response) =>{
            if(response.status === 200) {
                return response.json();
            } else if (response.status === 403) {
                // window.location.href = "/login"; // redirect
            } else {
                // Promise.reject(response);
                throw Error(response);
            }
        }).catch((error) => {
            console.log("http error");
            console.log(error);
        });
    }

    if(request) {
        options.body = JSON.stringify(request);
    }

    // post
    return fetch(options.url, options).then((response) =>{
        if(response.status === 200) {
            return response.json();
        } else if (response.status === 403) {
            // window.location.href = "/login"; // redirect
        } else {

        }
    }).catch((error) => {
        console.log("error : " ,error);
    });
}

export function login(userDto) {
    return call("/auth/login", "POST", userDto)
        .then((response) => {
            if(response && response.token) {

            }
        })
}

export function logout() {

    window.location.href = "/login";
}

export function signup(userDto) {
    return call("/auth/signup", "POST", userDto);
}

