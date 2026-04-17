import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram   } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start bg-base-100"><FaFacebook size={22}/> Facebook</button>
                <button className="btn join-item justify-start bg-base-100"><FaTwitter  size={22}/> Twitter</button>
                <button className="btn join-item justify-start bg-base-100"><FaInstagram  size={22}/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;