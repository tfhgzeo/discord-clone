'use client'
import Image from "next/image";
import { Compass, Plus } from "react-feather";

type Props = {
  home?: boolean;
  create?: boolean;
  explore?: boolean;
  notification?: boolean;
  mentions?: number;
};


export default function MenuButton({
  home = false,
  create = false,
  explore = false,
  notification = false,
  mentions
}: Props) {
  
  const mentionsNumber = mentions?.toString()
  const renderIcon = () => {
    switch (true) {
      case home:
        return (
          <Image src={"/homeIcon.svg"} alt="Home Icon" width={28} height={20} />
        );
      case create:
        return <Plus size={24} color="#43B581" />;
      case explore:
        return <Compass size={24} color="#43B581" />;
      default:
        return;
    }
  };
   

  return (
    <div className={
      ["w-[2.625rem] h-[2.625rem] bg-primary flex items-center justify-center rounded-full cursor-pointer mb-2 hover:rounded-xl transition-all ease-in-out transform duration-300 flex-shrink-0 relative ",
      "before:w-[0.5625rem] before:h-[0.5625rem] before:absolute before:left-[-1.0625rem] before:top-[calc(50%_-0.28125rem)] before:bg-[white] before:rounded-full before:content-['']",
      `${notification ? 'before:inline' : 'before:hidden'}`,
      `after:w-[19px] after:h-[19px] after:bg-[red] after:absolute after:bottom-[-4px] after:right-[-4px] after:rounded-full after:border-4 after:border-terciary after:text-center after:text-[white] after:text-[10px] after:font-bold after:content-['${mentionsNumber}']`,
      `${mentions != undefined ? 'after:inline' : 'after:hidden'} `
      ].join(" ")}>
      {renderIcon()}
      
    </div>
  );
}
