
import http from '../http-common'

const controller = '/Customer/'
export interface Customer{
    id:number;
    firstname:string;
    lastname:string;
    createddate:Date;
    emailaddress:string;
}
export function GetCustomers()
{
   
    let data = http.get<Array<Customer>>(controller+"ListOfAllCustomer").then(response=>response.data).then((results)=>
    {
        return results;
    })
    return data;
}
function CreateCustomer()
{
    http.put('https://localhost:7270/Customer/ListOfAllCustomer',{
        firstname:'',
        lastname:'',
        emailaddress:''
    })
    .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
}