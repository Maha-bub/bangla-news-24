import React from 'react';

const SignInPage = () => {
    return (
        <div>
            <form className='w-xs p-4'>
                <h2 className='text-2xl font-bold text-red-700 justify-center flex'>সাইন আপ</h2>

                <label className="label">ইমেইল</label>
                <input type="email" className="input w-md" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input w-md" placeholder="Password" />

                <button className="btn bg-red-700 text-white  mt-4 w-md">সাইন ইন করুন</button>
            </form>
        </div>
    );
};

export default SignInPage;