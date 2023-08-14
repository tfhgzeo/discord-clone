import React from 'react'
import SearchLineIcon from  'remixicon-react/SearchLineIcon'


interface Props extends React.HTMLProps<HTMLInputElement> {

}

const Input: React.FC<Props> = ({...props}:Props) => {
    return (
        <div className='w-18 h-6 bg-[#202225] cursor-text flex flex-row p-[6px]  rounded items-center gap'>
            <input style={{backgroundColor: 'transparent'}} className='border-none focus:outline-none text-[15px]' {...props}  />
            <SearchLineIcon size={18} color='#6F737A' /> 
        </div>
    )
}

export default Input