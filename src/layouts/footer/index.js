import circle from "../../assets/Circle.png";
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const footer = () => {
    return <div className="relative overflow-hidden">
        <div className="container mx-auto py-10 flex justify-between items-center">
            <p className="text-xs text-white">&copy; {new Date().getFullYear()} FM Data Center. All Rights Reserved.</p>
            <div className="flex items-center space-x-8 z-10">
                {/* icons */}
                <a href="https://google.com" target="_blank" rel="noreferrer"><img className="h-8 w-8" src={twitter} alt="Twitter" /></a>
                <a href="https://google.com" target="_blank" rel="noreferrer"><img className="h-8 w-8" src={facebook} alt="Twitter" /></a>
                <a href="https://google.com" target="_blank" rel="noreferrer"><img className="h-8 w-8" src={instagram} alt="Twitter" /></a>
            </div>
        </div>
        <img src={circle} className="absolute rotate-180" style={{ height: '50rem', bottom: '-45rem', right: '-20rem' }} alt="circle" />
    </div>
};

export default footer;