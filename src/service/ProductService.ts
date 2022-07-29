import http from '../http-common'

const controller = '/productservice/'
export function GetOrders()
{
    let data = http.get(controller+"").then(response=>response.data).then((results)=>
    {
        return results;
    })
    return data;
}