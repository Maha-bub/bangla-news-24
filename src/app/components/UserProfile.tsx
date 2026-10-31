'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';


const UserProfile = () => {
    // const { data: session } = authClient.useSession();

    const { data: session} = authClient.useSession();
    const user = session?.user;

    console.log(user?.image);


    // console.log("Loading:", isPending);
    // console.log("Session:", session);
    // console.log("User:", session?.user);
    // console.log("Image:", session?.user?.image);
    // console.log("Error:", error);

    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <div className='absolute right-0 flex items-center gap-2'>
            {
                user ?

                    <div className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 p-2 shadow-sm">

                        {/* User Profile */}
                        <div className="flex min-w-0 flex-1 items-center gap-3">

                            {/* Avatar */}
                            <div className="avatar">
                                <div className="w-11 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                                    <Image
                                        src={user?.image || "/default-avatar.png"}
                                        width={100}
                                        height={100}
                                        alt={user?.name ?? "User avatar"}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* User Info */}
                            <div className="min-w-0">
                                <p className="text-xs text-base-content/60">
                                    Welcome back,
                                </p>

                                <h2 className="truncate text-sm font-bold text-base-content">
                                    {user?.name || "Guest User"}
                                </h2>

                                <span className="text-xs text-success">
                                    ● Online
                                </span>
                            </div>

                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            type="button"
                            className="btn btn-error btn-sm gap-2 rounded-lg text-white transition-all duration-200 hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3H9m0 0l3-3m-3 3l3 3"
                                />
                            </svg>

                            <span>Logout</span>
                        </button>

                    </div>

                    :
                    <div className='flex gap-2 justify-center items-center' >
                        <Link href={'/sign-in'}>
                            <button className=" btn-success">সাইন ইন</button>
                        </Link>
                        <Link href={'/sign-up'}>
                            <button className="btn bg-red-500 text-white">সাইন আপ</button>
                        </Link>
                    </div>
            }


        </div>
    );
};

export default UserProfile;