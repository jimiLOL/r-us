
const url = 'http://localhost:5005'

const shopApi = {
getProduct: async (category: string, offset: number, limit: number, type: string, sort: string) => await fetch(`${url}/products?category=${category}&start=${offset}&limit=${limit}&type_shop=${type}&sort=${sort}`).then((res)=> {
if (res.ok) {
return res.json()
}
}).catch(e=> {
console.log(e)
}),
newBidForСalculator: async (UserProduct: any) => await fetch(`${url}/newrequest`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(UserProduct) }).then((res)=> {  if (res.ok) {return res.json()} }).catch(e=> {console.log(e)}), 
}

export default shopApi