const Button = ({action, src, classname, disabled}) => {
    return <button disabled={disabled} className={`bg-primary-a rounded-full p-4 shadow-xl hover:bg-primary-b duration-300 ${classname}`} onClick={action}>
        <img className="text-white h-5 w-5" src={src} alt="chevron-icon" />
    </button>
}

export default Button;