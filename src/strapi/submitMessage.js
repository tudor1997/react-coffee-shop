import url from '../utilis/URL'
import axios from 'axios'

async function submitMessage({name, email, message, setAlert}) {
    setAlert(true);
    const result = await axios.post(`${url}/messages`, {
        name,
        email,
        message
        }).catch(err => console.log(err))
        
        return result;

}

export default submitMessage;