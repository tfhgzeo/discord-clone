import React from "react";
import { ChevronDown, Plus } from 'react-feather'

type Props = {
    label: string

}

const Title: React.FC<Props> = ({label}: Props) => {
    return(
        <div className="w-full h-10 flex flex-row pl-2 pr-2 pt-3 pb-3 font-bold justify-between items-center">
            <div className="flex flex-row gap-2 items-center justify-center ">
                
                <ChevronDown color="#8E9297" size={12} className="cursor-pointer"/>
                <span className="text-[12px] text-[#8E9297]">
                    {label.toUpperCase()}
                </span>
            </div>
            <Plus color="#8E9297" size={18} className="cursor-pointer"/>
        </div>
    )

}
export default Title