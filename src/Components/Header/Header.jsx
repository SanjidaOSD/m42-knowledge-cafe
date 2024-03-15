import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 md:flex max-w-7xl mx-auto border-b-2'>

            <h1 className='text-5xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>

    );
};

export default Header;