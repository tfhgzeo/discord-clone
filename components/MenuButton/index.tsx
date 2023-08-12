import Image from  'next/image'
import { Plus, Search } from 'react-feather'

type Props = {
    home?: boolean
    create?: boolean
    search?: boolean
}

export default function MenuButton({home = false, create = false, search = false}: Props) {

    const renderIcon = () => {
        switch(true) {
            case (home):
                return (<Image src={'/homeIcon.svg'} alt='Home Icon' width={28} height={20} />)
            case (create): 
                return (<Plus size={24} color='#43B581' />)
            case (search):
                return (<Search size={24} color='#43B581' />)
            default: 
                return 
        }
    }

    return (
        <div className='w-[2.625rem] h-[2.625rem] bg-primary flex items-center justify-center rounded-full cursor-pointer mb-2'> 
            {renderIcon()}
         </div>
    )
}