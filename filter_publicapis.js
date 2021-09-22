const axios = require('axios');
const apiUrl = 'https://api.publicapis.org/categories'

function getListByFilter(filter){
    axios.get(apiUrl)
        .then(({data}) => {
            search(data, filter)
        })
        .catch((error) => {
            console.log(error);
        })
}

function search(list, filter) {
    let result = []
    list.map(element => {
        if (element.indexOf(filter) !== -1){
            result.push(element)
        }
    });
    console.log(result)
    return result
}

getListByFilter('Ani')
getListByFilter('Ev')
getListByFilter('Open')