import React from 'react';
import swiming from '../../assets/swimming.png';
import classRoom from '../../assets/class.png';
import playground from '../../assets/playground.png';


const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img className='w-full object-cover' src={swiming} alt="Swiming" />
                <img className='w-full object-cover' src={classRoom} alt="class" />
                <img className='w-full object-cover' src={playground} alt="playground" />
            </div>
        </div>
    );
};

export default QZone;