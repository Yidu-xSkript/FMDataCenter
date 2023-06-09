const Input = ({id, name, placeholder, type}) => {
    return <div>
        <label htmlFor={id} className="block mb-2 text-sm font-bold text-black">{name}</label>
        <input type={type} id={id} className="shadow border text-sm rounded-xl outline-none focus:shadow-md duration-300 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
};

export default Input;