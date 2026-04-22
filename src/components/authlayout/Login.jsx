import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {signIn, setUser} = use(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then((userCredential)=>{
            setUser(userCredential.user);
            navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((error)=>{
            const errorCode = error.code;
            console.log(errorCode);
            setError(errorCode);
        })

    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl font-bold text-center pt-5">Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />


                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    {error && <p className='text-xs text-red-500'>{error}</p>}
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='font-bold text-center py-2'>Don't Have an Account? <Link className='text-secondary' to={"/auth/register"}>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;