import Image from 'next/image';
// import Logo from '/logo.webp';

const Navbar = () => {
    const date = new Date().toLocaleDateString('bn-BD',
        {
            dateStyle: "full",
        })
    console.log(date)
    return (
        <div className='container'>
            <div className='flex align-items-center text-center gap-1'>
                <Image
                    src={'/logo.webp'}
                    alt=""
                    width={50}
                    height={40}>

                </Image>
                <div>
                    <h2 className='text-3xl font-bold'>Bangla News 24</h2>
                    <p>{date}</p>
                </div>
            </div>

        </div>
    );
};

export default Navbar;