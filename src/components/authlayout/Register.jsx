import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser, updateUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({name, photo, email, password});

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUser({
                displayName: name,
                photoURL: photo,
            }).then(()=> {
                setUser({...user, displayName: name, photoURL: photo});
                navigate("/");
            }).catch((error)=>{
                console.log(error);
                setUser(user);
            })
        })
        .catch(error =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        })

    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl font-bold text-center pt-5">Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label">Name</label>
                    <input required name='name' type="text" className="input" placeholder="Name" />

                    {/* Photo URL */}
                    <label className="label">Photo URL</label>
                    <input required name='photo' type="text" className="input" placeholder="Photo URL" />

                    {/* Email */}
                    <label className="label">Email</label>
                    <input required name='email' type="email" className="input" placeholder="Email" />

                    {/* Password */}
                    <label className="label">Password</label>
                    <input required name='password' type="password" className="input" placeholder="Password" />

                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>

                    <p className='font-bold text-center py-2'>Already Have an Account? <Link className='text-secondary' to={"/auth/login"}>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;