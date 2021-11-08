import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// strapi functions
import loginUser from '../strapi/loginUser'
import registerUser from '../strapi/registerUser'
// hnadle user
import {userHistory} from 'react-router-dom'
import { UserContext } from '../context/user'



const Login = () => {
    const history = useHistory();
    //setup a user context
    const {userLogin, alert, showAlert} = React.useContext(UserContext);


    //state values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('default');
    const [isMember, setIsMember] = useState(true);

    let isEmpty = !email || !password || !username || alert.show;

    const toggleMember = () => {
        setIsMember((prevMember) =>{
            let isMember = !prevMember
            isMember ? setUsername('default') : setUsername('');
            return isMember;
        })
    };

    const handleSubmit = async (e) => {
        showAlert({msg:'Accessing user data. Please wait...'})
        // alert
        e.preventDefault();
        let response;
        if(isMember){
            response = await loginUser({email,password}) 
        }else{
            response = await registerUser({email, password, username})
        }
        if(response){
            const { jwt:token, user:{username} } = response.data
            const newUser = {token, username};
            userLogin(newUser);
            showAlert({
                msg:`You are logged in : ${username}. Happy shopping.`
            })
            history.push('/products');
        }else{
            showAlert({
                msg:'There was an error. Please try again...',
                type:'danger'
            })
            // show alert
        }
            
        }
    
    return (
        <section className="login-section">
            <h1 className="section-title">{isMember? 'Sign In' : "Register"}</h1>

            <form className="login-form">
                {/* single input */}
                <div className="form-control">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" id="email" value={email}
                     onChange={e => setEmail(e.target.value)}/>
                </div>
                {/* end of single input */}

                {/* single input */}
                <div className="form-control">
                    <label className="label" htmlFor="password">Password</label>
                    <input  className="form-input" type="password" id="password" value={password}
                     onChange={e => setPassword(e.target.value)}/>
                </div>
                {/* end of single input */}

                {/* single input */}
                {!isMember &&  
                 <div className="form-control">
                    <label className="label" htmlFor="username">Username</label>
                    <input  className="form-input" type="text" id="username" value={username} 
                     onChange={e => setUsername(e.target.value)}/>
                </div>
                }
                {/* end of single input */}

                {/* empty form text */}
                {isEmpty && <p className="form-empty">Please fill out all form fields</p>}
                {/* submit btn */}
                {!isEmpty && <button type="submit" className="login-btn" onClick={handleSubmit}>
                    Submit</button>}
                {/* register link */}
                <p className="register-link">
                    {isMember ? "Need to Register?": "Already a Member?"}
                    <button type="button" onClick={toggleMember}>Click here</button>
                </p>
            </form>
        </section>
    )
}

export default Login
