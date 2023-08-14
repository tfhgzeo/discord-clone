'use client'
import React, { useState } from "react";
import Avatar from "../Avatar";
import MicFillIcon from 'remixicon-react/MicFillIcon'
import HeadphoneFillIcon from 'remixicon-react/HeadphoneFillIcon'
import Settings5FillIcon from 'remixicon-react/Settings5FillIcon'


const UserInfo: React.FC = () => {
    const [userStatus, setUserStatus] = useState<UserStatus>('disponivel')

    return (
        <div className="h-full w-full pl-[20px] pt-[10px] pb-[10px] pr-[14px] flex flex-row items-center justify-between bg-[#292B2F]">
            <div className="h-14 w-auto p-2 flex flex-row gap-2 hover:bg-[white]/[0.1] items-center rounded-lg cursor-pointer"> 
                <Avatar image="https:cdn.discordapp.com/avatars/646890933090123802/dad395faedb61d33d7eea5ff2a2e7afb.webp?size=160" userStatus={userStatus} />
                <div className="flex flex-col p-0 m-0">
                    <text className="text-[14px] text-[#FFF]">BeGoD</text>
                    <text className="text-xs text-[#B9BBBE]">{userStatus}</text>
                </div>
            </div>
            <div className="flex flex-row gap-2 ">
                <div className="hover:bg-[white]/[0.1] h-7 w-7 p-1 rounded">
                    <MicFillIcon color="#B9BBBE" size={20} className="cursor-pointer"/>
                </div>
                <div className="hover:bg-[white]/[0.1] h-7 w-7 p-1 rounded"> 
                    <HeadphoneFillIcon color="#B9BBBE" size={20} className="cursor-pointer" />
                    </div>
                <div className="hover:bg-[white]/[0.1] h-7 w-7 p-1 rounded"> 
                    <Settings5FillIcon color="#B9BBBE" size={20} className="cursor-pointer" /> 
                </div>
            </div>
        </div>
         
    )
}

export default UserInfo