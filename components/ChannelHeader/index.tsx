import React from  'react'

import { ChevronDown } from 'react-feather'

type Props = {
    title: string
}

const ChannelHeader: React.FC<Props> = ({title}: Props) => {
    return (
        <div className='w-full h-full p-4 flex flex-row justify-between items-center border-b-[1.5px] border-[#222327]'>
            <text className='font-bold text-base'>{title}</text>
            <ChevronDown size={18} />
        </div>
        )
}

export default ChannelHeader