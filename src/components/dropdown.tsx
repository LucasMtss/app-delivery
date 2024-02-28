import { ChangeEvent } from "react";

interface IDropdownProps {
    label: string;
    onChangeValue?: (e: any) => void;
    value: string;
    isDisabled?: boolean;
    options: string[];
}


export function Dropdown({label, onChangeValue, value, isDisabled, options}: IDropdownProps) {

    function handleChangeValue(e: ChangeEvent<HTMLSelectElement>){
        if(onChangeValue){
            onChangeValue(e.target.value)
        }
    }

  return (
    <div className="flex flex-col w-full mt-2">
        <label className="mb-1">{label}</label>
        <select defaultChecked={false} defaultValue={options[0]} disabled={isDisabled} onChange={e => handleChangeValue(e)} className="p-2 rounded-md text-slate-800 bg-slate-200" value={value}>
            {
                options.map(option => (<option key={option} value={value}>{option}</option>))
            }
        </select>
    </div>
  )
}
