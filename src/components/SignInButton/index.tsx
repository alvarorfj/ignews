import {FaGoogle} from 'react-icons/fa';
import {useState} from 'react'
import {FiX} from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

export function SignInButton() {

    const { data: session } = useSession()
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

    return session ? 
        <button
            className={styles.signInButton}
            type="button"
            onClick={() => signOut()}>
                <FaGoogle color="#04d361"/>
                {session.user?.name}
                <FiX color="#737380" className={styles.closeIcon} onClick={() => setIsUserLoggedIn(false)}/>
        </button> 
        : 
        <button 
            className={styles.signInButton}
            type="button"
            onClick={() => signIn('google')}>
                <FaGoogle color="#eba417"/>
                Sign in with Google
        </button>
}