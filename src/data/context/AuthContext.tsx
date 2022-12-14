import Cookies from 'js-cookie';
import route from 'next/router';
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "../../model/User";

interface AuthContextProps {
    user?: User
    loading?: boolean
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}


const AuthContext = createContext<AuthContextProps>({})

async function userNormalized(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0].providerId,
        imageUrl: userFirebase.photoURL
    }
}

function managementCookie(logged: boolean) {
    if (logged) {
        Cookies.set('admin-template-efss7-auth', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-efss7-auth')
    }
}

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    async function configureSection(userFirebase) {
        if (userFirebase?.email) {
            const user = await userNormalized(userFirebase)
            setUser(user)
            managementCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            managementCookie(false)
            setLoading(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const res = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            configureSection(res.user)
            route.push('/')
        } finally {
            setLoading(false)
        }

    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await configureSection(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-efss7-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(configureSection)
            return () => cancel()
        } else{
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext