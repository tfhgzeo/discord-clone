import Image from 'next/image'
import React from 'react'

type Props = {
    userStatus: UserStatus
    image: string
}

const Avatar: React.FC<Props> = ({userStatus, image}:Props) => {
    return (
        <div className={
            [
                "w-8 h-8 rounded-full relative",
                "before:w-3 before:h-3 before:bottom-[-1px] before:right-[-1px] before:bg-[green] before:absolute before:conten-[''] before:rounded-full", 
                `${() => {
                    switch (userStatus){
                        case 'disponivel':
                            return ('before:bg-[green] ')

                    }
                }}`
            ].join(' ')} >
                <Image alt='' src={image} width={32} height={32} className='rounded-full' />
            </div>
        
    )
}

export default Avatar