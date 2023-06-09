import Header from "./header";
import Footer from "./footer";

const GuestLayout = ({children}) => {
    return <div>
        <Header/>
        { children }
        <Footer/>
    </div>
};

export default GuestLayout;