
function Get(url) {
    return new Promise((resolve, rejects) => {
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => { alert(err); rejects(err) });
    })
}


