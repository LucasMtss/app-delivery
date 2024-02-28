import { useEffect, useState } from "react";
import { PRODUCTS, ProductProps } from "../utils/data/products";

import { formatCurrency } from "../utils/functions/format-to-currency";
import {useLocation, redirect, useNavigate} from 'react-router-dom'
import { Button } from "../components/button";
import { useCart } from "../hooks/useCart";
import { toast } from "sonner";

export default function ItemDetails(){
    const [product, setProduct] = useState<ProductProps>();
    const [thumbnail, setThumbnail] = useState<any>(null);
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const {addToCart} = useCart();
    
    useEffect(() => {
        getId();
    }, [])

    function getId() {
        
        const path = pathname.split('/');
        const id = path[path.length -1]

        const product = PRODUCTS.find(item => item.id === id);
        if(!product){
            redirect('/');
        }

        setProduct(product)
        handleImportImage(product?.cover ?? '')
      }
      
      async function handleImportImage(imagePath: string){
        const image = await import(/* @vite-ignore */'../'+imagePath);
        setThumbnail(image.default)
        
    }  
    
    function handleAddToCart(){
        if(!product) return;
        addToCart(product);
        toast.success('Item adicionado no carrinho!');
        
    }

    return (
        <div className="flex-1 max-w-[800px] mx-auto">
            <img src={thumbnail} className="max-h-lvh bg-cover mx-auto" />
            <div className="flex flex-col p-5 mt-2 flex-1">
                <h2 className="text-white text-2xl font-heading">{product?.title}</h2>
                <span className="text-lime-400 text-2xl font-heading my-2">{formatCurrency(product?.price ?? 0)}</span>
                <span className="text-slate-400 font-body text-base leading-6 mb-6">{product?.description}</span>
                {
                    product?.ingredients.map(ingredient => (
                        <span key={ingredient} className="text-slate-400 font-body text-base leading-6">{"\u2022"} {ingredient}</span>
                    ))
                }
            </div>

            <div className="p-5 pb-8 gap-5 flex flex-col">
                <Button title="Adicionar ao pedido" onClick={handleAddToCart}/>
                <Button title="Voltar" transparent onClick={() => navigate('/')}/>
               
            </div>
        </div>
    )
}