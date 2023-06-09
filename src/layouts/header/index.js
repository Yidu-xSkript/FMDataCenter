const header = () => {
    return <div className="py-5 px-10 absolute top-0 w-full flex items-center justify-between z-10">
        {/* Logo */}
        <div className="text-lg text-white uppercase font-extrabold">FM Data Center</div>
        {/* Link */}
        <div className="flex items-center gap-8">
            <p className="cursor-pointer text-white font-semibold hover:text-gray-300 duration-300">Contact</p>
            <button className="text-white rounded-full shadow-lg py-2 px-5 cursor-pointer font-semibold bg-primary-a hover:bg-primary-b duration-300">Call Us</button>
        </div>
    </div>
};

export default header;