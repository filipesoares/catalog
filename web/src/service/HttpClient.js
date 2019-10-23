import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/discs';

class HttpClient {

    list(name) {
        return axios.get( BASE_URL + '?page=1&size=-1' + (name==='' ? '' : '&name=' + name) );
    }

    fetch(id) {
        return axios.get(BASE_URL + '/' + id);
    }

    delete(id) {
        return axios.delete(BASE_URL + '/' + id);
    }

    create(disc) {
        return axios.post(""+BASE_URL, disc);
    }

    update(disc) {
        return axios.put(BASE_URL + '/' + disc.id, disc);
    }

}

export default new HttpClient();