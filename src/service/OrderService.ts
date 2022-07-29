import http from '../http-common'

const controller = '/order/'
export function GetOrders()
{
    let data = http.get(controller+"").then(response=>response.data).then((results)=>
    {
        return results;
    })
    return data;
}