import axios from 'axios'
import http from '../http-common'

const controller = '/Employee/'
export function GetEmployees()
{
    let data = http.get(controller+"").then(response=>response.data).then((results)=>
    {
        return results;
    })
    return data;
}