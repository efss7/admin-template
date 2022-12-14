import useAuth from "../../data/hook/useAuth";
import { IconBell, IconHome, IconLogout, IconSettings } from "../icons";
import Logo from "./Logo";
import MenuItems from "./MenuItems";

interface SideMenuProps {

}

export default function SideMenu(props: SideMenuProps) {
    const {logout} = useAuth()
    return (
        <aside className="flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900
        ">
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
                <MenuItems
                text='Sair'
                onClick={logout}
                icon={IconLogout}
                className={`
                text-red-600 dark:text-red-400
                hover:bg-red-400 hover:text-white dark:hover:text-white
                `} 
                />
            </ul>
        </aside>
    )
}