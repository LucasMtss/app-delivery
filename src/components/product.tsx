import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProductDataProps {
    id: string | number;
    title: string;
    description: string;
    thumbnail: any;
    quantity?: number;
}

interface IProductProps {
    data: IProductDataProps;
    onClick?: () => void;
}

export const Product = ({data, onClick}: IProductProps) => {
    const [thumbnail, setThumbnail] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        handleImportImage();
    }, [])

    async function handleImportImage(){
        const image = await import(/* @vite-ignore */'../'+data.thumbnail);
        setThumbnail(image.default)
        
    }

    function handleRedirect(){
        navigate(`/product/${data.id}`)
    }

    return(
        <div className="flex w-full flex-row items-center pb-4" onClick={ onClick ? onClick : handleRedirect}>
            <img src={thumbnail} className="w-20 h-20 rounded-md"/>
            <div className="flex-1 ml-3">
                <div className="flex-row items-center justify-between">
                <span className="text-slate-100 font-subtitle flex-1 ">{data.title}</span>
                {
                    data?.quantity && (
                        <span className="text-slate-400 font-subtitle text-sm ml-2">X {data.quantity}</span>
                    )
                }
                </div>
                <span className="text-slate-400 text-xs leading-5 mt-0.5">{data.description}</span>
            </div>
        </div>
    )
}