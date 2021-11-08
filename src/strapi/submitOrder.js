import axios from "axios";
import url from '../utilis/URL'

async function submitOrder ({name,address,total,items,stripeToken,userToken}){
  const response = await axios.post(`${url}/orders`,{
      name,
      address,
      total,
      items,
      stripeToken
  },{
      headers:{
          Authorization: `Bearer ${userToken}`,
      }
  }).catch(error => console.log(error))

  return response;
}

export default submitOrder;