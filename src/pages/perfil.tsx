import Layout from "../components/template/Layout";
import useData from "../data/hook/useData";

export default function Perfil() {
    const { switchTheme } = useData()
    return (
        <Layout
            title="Perfil do Usuário"
            subtitle="Administre as suas informações de usuário!">
                <h1>Perfil Usuário</h1>
        </Layout>
    )
}
