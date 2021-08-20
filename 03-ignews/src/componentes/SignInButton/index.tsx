import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedin = true;

    return isUserLoggedin ? (
        <button
            type="button"
            className={styles.signInButtonContainer}
        >
            <FaGithub color="#04d361" />
            José Geraldo
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButtonContainer}
        >
            <FaGithub color="#eba417" />
            SignIn in with Github
        </button>
    )
}