import Image from 'next/image';
import NavLinks from './NavLinks';
import Marquee from './Marquee';
// import Logo from '/logo.webp';

const Navbar = () => {
    const date = new Date().toLocaleDateString('bn-BD',
        {
            dateStyle: "full",
        })
    console.log(date)
    return (
        <div >
            <div className='container relative mx-auto flex max-w-7xl items-center justify-center py-5'>
                <div className='flex align-items-center items-center gap-1 w--10/12 '>
                    <Image
                        src={'/logo.webp'}
                        alt=""
                        width={50}
                        height={40}>

                    </Image>
                    <div>
                        <h2 className='text-3xl font-bold text-red-700'>Bangla News 24</h2>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='absolute right-0 flex items-center gap-2'>
                    <button className=" btn-success">সাইন ইন</button>
                    <button className="btn bg-red-500 text-white">সাইন আপ</button>
                </div>

            </div>


            <NavLinks></NavLinks>
            <Marquee></Marquee>
        </div>
    );
};

export default Navbar;