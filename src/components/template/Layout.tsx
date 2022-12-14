import useData from "../../data/hook/useData"
import ForceAuth from "../auth/ForceAuth"
import Content from "./Content"
import SideMenu from "./SideMenu"
import TopBar from "./TopBar"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { theme } = useData()
    return (
        <ForceAuth>
            <div className={`${theme} flex h-screen w-screen`}>
                <SideMenu />
                <div className={`flex flex-col w-full p-7
             bg-gray-300 dark:bg-gray-800 `}>
                    <TopBar title={props.title} subtitle={props.subtitle} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </ForceAuth>
    )
}