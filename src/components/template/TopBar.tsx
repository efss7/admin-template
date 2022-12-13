import useData from "../../data/hook/useData"
import ButtonTheme from "./ButtonTheme"
import Title from "./Title"

interface TopBarProps {
    title: string
    subtitle: string
}

export default function TopBar(props: TopBarProps) {
    const {theme, switchTheme} = useData()
    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className={`flex flex-grow justify-end`} >
            <ButtonTheme theme={theme} switchTheme={switchTheme}/>
            </div>
        </div>
    )
}