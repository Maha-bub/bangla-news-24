import Image from 'next/image';
import NavLinks from './NavLinks';
import UserProfile from './UserProfile';


const Navbar = () => {
    const date = new Date().toLocaleDateString('bn-BD',
        {
            dateStyle: "full",
        })

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
                <UserProfile></UserProfile>

            </div>


            <NavLinks></NavLinks>

        </div>
    );
};

export default Navbar;