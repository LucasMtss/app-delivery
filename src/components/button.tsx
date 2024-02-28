
interface IButtonProps {
    title: string;
    transparent?: boolean
    onClick?: () => void;
}

export function Button({title, transparent, onClick}: IButtonProps){
    return (
        <button onClick={onClick} className={`min-w-[200px] text-center font-bold px-4 py-2 rounded-md text-lg ${transparent ? 'bg-transparent text-lime-400 border border-lime-400' : 'bg-lime-400 text-slate-700'}`}>
            {title}
        </button>
    )
}