const axios = require('axios');

export function request(options){
    options.success = options.success || (() => {});
    options.error = options.error || (() => {});
    if (options.method.toLocaleString() === 'get') {
        axios.get(options.url)
            .then(options.success)
            .catch(options.error);
    } else if (options.method.toLocaleString() === 'post') {
        return axios.post(options.url)
            .then(options.success)
            .catch(options.error);
    }
}