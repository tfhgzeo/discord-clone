import React from 'react'
import { Hash } from 'react-feather'
import PushpinFillIcon from 'remixicon-react/PushpinFillIcon'
import Notification3FillIcon from 'remixicon-react/Notification3FillIcon'
import GroupFillIcon from 'remixicon-react/GroupFillIcon'
import AtLineIcon from  'remixicon-react/AtLineIcon'
import QuestionFillIcon from  'remixicon-react/QuestionFillIcon'
import Input from './input'

type Props = {
    label: string
}

const ChatHeader: React.FC<Props> = ({label}) => {
    return (
        <div className='w-full h-12 border-b-[1.5px] border-[#222327] pl-6 pt-3 pb-3 pr-7 flex flex-row justify-between'>
            <div className='flex flex-row gap-2 items-center'>
                <Hash size={18} color='#72767D' />
                {label}
            </div>
            <div className='flex flex-row gap-4' >
                <Notification3FillIcon color='#B9BBBE' className='cursor-pointer' size={24} />
                <PushpinFillIcon color='#B9BBBE' className='cursor-pointer' size={24}/>
                <GroupFillIcon color='#B9BBBE' className='cursor-pointer' size={24}/>
                <Input placeholder='Search' />  
                <AtLineIcon color='#B9BBBE' className='cursor-pointer'size={24}/>
                <QuestionFillIcon color='#B9BBBE' className='cursor-pointer'size={24}/>
            </div>
        </div>
    )
}

export default ChatHeader