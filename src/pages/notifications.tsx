import Layout from "../components/template/Layout";
import useData from "../data/hook/useData";

export default function Notifications() {
    const { switchTheme } = useData()
    return (
        <Layout
            title="Notificações"
            subtitle="Aqui você irá gerenciar as suas notificações!">
            <button onClick={switchTheme}>Alternar Tema</button>
        </Layout>
    )
}
