
interface IButtonProps {
    title: string;
    transparent?: boolean
    onClick?: () => void;
    isLoading?: boolean;
}

export function Button({title, transparent, onClick, isLoading}: IButtonProps){
    return (
        <button disabled={isLoading} onClick={onClick} className={`min-w-[200px] text-center font-bold px-4 py-2 rounded-md text-lg ${transparent ? 'bg-transparent text-lime-400 border border-lime-400' : 'bg-lime-400 text-slate-700'}`}>
            {isLoading ? 'Carregando...' : title}
        </button>
    )
}