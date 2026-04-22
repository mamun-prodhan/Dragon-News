import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = use(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            alert("Sign Out Successfully");
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className='flex items-center justify-between'>
            <div></div>
            <div className='nav flex items-center gap-3'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-5'>
                <img className='w-12 h-12 object-cover rounded-full' src={user.photoURL ? user.photoURL : userIcon} alt="User icon" />
                {
                    user ? (
                        <button onClick={handleLogOut} className='btn btn-primary px-10'>Logout</button>
                    ) : (
                        <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link>
                    )
                }
            </div>
        </div>
    );
};


export default Navbar;