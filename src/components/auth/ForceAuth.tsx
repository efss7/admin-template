import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import Loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'
interface ForceAuthPropsProps {

}

export default function ForceAuth(props: ForceAuthPropsProps) {
    const { user, loading } = useAuth()
    function renderContent() {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-efss7-auth")){
                                    window.location.href = "/authentication"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={Loading} alt={"Componente de carregamento"} />
            </div>
        )
    }

    if (!loading && user?.email) {
        return renderContent()
    } else if (loading) {
        return renderLoading()
    } else {
        router.push("/authentication")
        return null
    }
}