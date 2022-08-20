import React from 'react';
import './Letters.css'


const Letters = () => {
    return (
        <div className='letters mt-5 text-center'>
            <h3 className='mb-4'>SUBSCRIBE TO NEWSLETTER</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora modi ratione ea est atque unde odio sit rerum. Corporis, nulla.</p>
            <form className='d-flex justify-content-center align-items-center flex-column flex-md-row gap-3'>
                <input type="text" className='form-control mt-3 rounded-0 py-2' placeholder='Enter Your E-mail' required />
                <button className="btn btn-lg rounded-0 btn-danger mt-3">Subscribe</button>
            </form>
        </div>
    );
};

export default Letters;