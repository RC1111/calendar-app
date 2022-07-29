import http from '../http-common'

const controller = '/schedule/'
export function GetSchedules()
{
    let data = http.get(controller+"").then(response=>response.data).then((results)=>
    {
        return results;
    })
    return data;
}