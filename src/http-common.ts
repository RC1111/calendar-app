import axios from 'axios'
import config from './config'


export default axios.create({
    baseURL: config.URI + ':' + config.port,
    headers:{
        // 'Content-Type':'application/json;charset=UTF-8',
        // 'Access-Control-Allow-Orgin':'*',
    }
})