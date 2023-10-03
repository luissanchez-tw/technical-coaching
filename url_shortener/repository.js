
class Repository {

    constructor() {
        this.urls = new Map();
    }

    save(key, originalUrl) {
        console.log(key,originalUrl, 'we are saving it into db');
        this.urls.set(key, originalUrl);
    }

    findOriginalUrl(key) {
        return this.urls.get(key);
    }

}

module.exports = Repository;