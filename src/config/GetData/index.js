import axios from 'axios';


class GetData {

    getData() {
        let data = ''
        axios({
            method: 'get',
            url: 'http://192.168.1.17:4000/engineer'
        }).then(res => {
            let result = res.data.result[0];
            data = result
        }).catch(err => {
            if (err.response) {
                return console.log(err.response.data.result[0])
            }
            if (err.request) {
                return console.log('error from request', err.request);
            }
            else {
                console.log(err)
            }
        })

        return data
    }

    getDataByUsername(username) {

        let data = ''
        axios({
            method: 'get',
            url: 'http://192.168.1.17:4000/engineer/' + username
        }).then(res => {
            let result = res.data.result[0];
            data = result
        }).catch(err => {
            if (err.response) {
                return console.log(err.response.data.result[0])
            }
            if (err.request) {
                return console.log('error from request', err.request);
            }
            else {
                console.log(err)
            }
        })

        return data
    }
}

export default new GetData