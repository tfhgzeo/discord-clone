import React from "react";
import Hashtag from 'remixicon-react/HashtagIcon'
import VolumeDownFillIcon from 'remixicon-react/VolumeDownFillIcon'
import UserAddFillIcon from 'remixicon-react/UserAddFillIcon'
import Settings5FillIcon from 'remixicon-react/Settings5FillIcon'


type Props = {
    selectec?: boolean;
    name: string;
    type?: string
}

const Channel: React.FC<Props> = ({selectec = false, name, type = 'text'}:Props) => {
    return(
        <div className={`w-64 h-8 text-[white] ${selectec ? 'bg-[#4F545C]' : ''} flex flex-row ml-[10px] rounded items-center justify-between p-2 ${selectec ? '': 'hover:bg-[#4F545C]/[0.5]'} cursor-pointer `}>
            <div className="flex flex-row items-center gap-1">
            {
                type == 'text' ? 
                    (<Hashtag color="#8E9297" size={18} className="cursor-pointer"/>) : 
                    (<VolumeDownFillIcon color="#8E9297" size={18} className="cursor-pointer"/>)
                }
                <text className={`font-bold ${selectec ? 'text-[white]' : 'text-[#8E9297]'}`}>
                    {name}
                </text>
            </div>
            <div className="flex flex-row items-center gap-1">
                <UserAddFillIcon size={16}/>
                <Settings5FillIcon size={16}/>
            </div>
        </div>
    )
}

export default Channel