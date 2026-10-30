'use client';

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {


    const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, url: string, password: string };
        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: '/'
        })
        if (data) {
            console.log('User created successfully', data)
            redirect('/')
        }
        if (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form className='w-xs p-4' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold text-red-700 justify-center flex'>সাইন ইন করন</h2>

                <label className="label">নাম</label>
                <input name="name" type="name" className="input w-md" placeholder="Name" />

                <label className="label">ইমেজ লিংক     </label>
                <input name="url" type="url" className="input w-md" placeholder="ImageURL" />

                <label className="label">ইমেইল</label>
                <input name="email" type="email" className="input w-md" placeholder="Email" />

                <label className="label">Password</label>
                <input name="password" type="password" className="input w-md" placeholder="Password" />

                <button type="submit" className="btn bg-red-700 text-white  mt-4 w-md">সাইন ইন করুন</button>
            </form>
        </div>
    );
};

export default SignUpPage;