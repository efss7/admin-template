import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconExclamation } from "../components/icons";
import useAuth from "../data/hook/useAuth";

interface AuthenticationProps {


}

export default function Authentication(props: AuthenticationProps) {

    const {user, loginGoogle} = useAuth()

    const [error, setError] = useState(null)
    const [mode, setMode] = useState<'login' | 'signUp'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function displayError(msg, time = 5){
        setError(msg)
        setTimeout(()=> setError(null), time * 1000)
    }

    function submit() {
        if (mode === 'login') {
            console.log('login')
        } else {
            console.log('signUp')
        }
    }
    return (
        <div className="flex h-screen items-center justify-center">
            <div className={` hidden md:block md:w-1/2 lg:w-2/3`}>
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da Tela de Autenticação"
                    className={`h-screen w-full object-cover`}
                />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-3xl font-bold mb-5`} >
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
                </h1>
                {error ? (
                    <div className={`
                     flex items-center 
                     bg-red-400 text-white py-3 px-5 my-2
                     border border-red-700 rounded-lg
                    `} >
                        {IconExclamation()}
                        <span className={`ml-3`}>{error}</span>
                    </div>
                ): false}

                <AuthInput
                    label="Email"
                    type="email"
                    value={email}
                    valueChanged={setEmail}
                    mandatory
                />
                <AuthInput
                    label="Senha"
                    type="password"
                    value={password}
                    valueChanged={setPassword}
                    mandatory
                />
                <button onClick={submit} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
                `} >
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className={` my-6 border-gray-300`} />
                <button onClick={loginGoogle} className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3 mb-4
                `} >
                    Entrar com o Google
                </button>
                {mode === "login" ? (
                    <p>
                        Novo por aqui?
                        <a onClick={() => setMode('signUp')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                        `}> Cadastre-se! :)</a>
                    </p>
                ) : (
                    <p>
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setMode('login')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                        `}> Entre com suas credenciais </a>
                    </p>
                )}
            </div>
        </div>

    )
}