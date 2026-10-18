import Link from 'next/link';
import React from 'react';

const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const resData = await res.json();
    const navLinks = resData.data;
    const fileteredNavLinks = navLinks.filter(items => items.scrapable)
    console.log(fileteredNavLinks);

    return (
        <div className='flex gap-4 justify-center'>
            {
                fileteredNavLinks.map(navLinks => <Link key={navLinks.id} href={'/navLinks.slug'}>{navLinks.title}</Link>)
            }

        </div>
    );
};

export default NavLinks;