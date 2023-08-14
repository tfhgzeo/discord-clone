import ChannelHeader from "@/components/ChannelHeader";
import Channels from "@/components/Channels";
import ChatHeader from "@/components/ChatHeader";
import Divider from "@/components/Divider";
import MenuButton from "@/components/MenuButton";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-row bg-primary">
      <div className="bg-terciary w-[4.5rem] p-3 flex-none gap-2 items-center overflow-y-scroll scrollbar-hide">
          <MenuButton home/>
          <Divider />
          <MenuButton notification />
          <MenuButton mentions={4} />
          <MenuButton />
          <MenuButton mentions={4} />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton mentions={1} />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton create/>
          <MenuButton explore/>
      </div>
      <div className="bg-secundary w-[17rem] h-full grid GridChannelTemplate justify-between">
        <ChannelHeader title="Teste" />
        <Channels />
        <UserInfo />
      </div>
      <div className="h-full w-full"> 
        <ChatHeader label="general" />
      </div>
    </div>
  )
}