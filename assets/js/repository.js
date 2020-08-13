const repositories = function() {
    const domain = "https://antonplancke.be/"

    const header = {
        
    }
    
    function getJson(url) {
        console.log(url)
        return fetch(url, header)
            .then(res => res.json())
    }

    return {
        getProducts: (id = "") =>
            getJson(`${domain}wp-json/wc/store/products/${id}`)
    }
}();