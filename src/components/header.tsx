import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo-grande.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

interface IHeaderProps {
    title: string;
    cartQuatityItems?: number;
}

export function Header({title, cartQuatityItems = 0}: IHeaderProps){
    const navigate = useNavigate();

    return (
        <div className="flex flex-row items-start border-b border-slate-700 pb-5 mx-5">
            <div className="flex-1">
                <img className="w-32 mb-2 md:w-[200px] sm:w-1/3" src={Logo} />
                <span className="text-white text-2xl font-heading">{title}</span>
            </div>
            {
                cartQuatityItems > 0 && (
                    <div onClick={() => navigate('/cart')}>
                        <div className="flex">
                            <ShoppingBagIcon fontSize="large"/>
                            <div className="flex bg-lime-300 rounded-full w-6 h-6 items-center justify-center -bottom-5 z-10 -right-3.5">
                                <span className="text-slate-800 font-bold text-xl">{cartQuatityItems}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}