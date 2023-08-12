import Divider from "@/components/Divider";
import MenuButton from "@/components/MenuButton";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-row bg-primary">
      <div className="bg-terciary w-[4.5rem] p-3 flex-none gap-2 items-center overflow-y-scroll scrollbar-hide">
          <MenuButton home/>
          <Divider />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton create/>
          <MenuButton search/>
      </div>
      <div className="bg-secundary w-[17rem] h-full">2</div>
      <div className="h-full"> 3</div>
    </div>
  )
}
