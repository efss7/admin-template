import { IconBell, IconHome, IconLogout, IconSettings } from "../icons";
import Logo from "../Logo";
import MenuItems from "./MenuItems";

interface SideMenuProps {

}

export default function SideMenu(props: SideMenuProps) {
    return (
        <aside className="flex flex-col">
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-800
            h-20 w-20`}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItems url='/' text="Início" icon={IconHome} />
                <MenuItems url='/settings' text='Ajustes' icon={IconSettings} />
                <MenuItems url='/notifications' text='Notificações' icon={IconBell} />
            </ul>
            <ul>
                <MenuItems text='Sair' icon={IconLogout}
                onClick={()=> console.log("logout")}
                className={`
                text-red-600
                hover:bg-red-400 hover:text-white
                `} 
                />
            </ul>
        </aside>
    )
}