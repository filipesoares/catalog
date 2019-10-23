module.exports = class ResponseHelper {
    constructor() {
    }

    static hateoas(url, page) {  
        if (url.indexOf('page=')>=0) {
          url = url.replace((url.indexOf('&')>=0 ? url.substring(url.indexOf('page='), url.indexOf('&')) : url.substring(url.indexOf('page=') )), ('page='+page));
        }
        return url;
    }
}