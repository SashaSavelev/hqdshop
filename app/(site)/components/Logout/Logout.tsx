import styles from './Logout.module.css'
import { doSocialLogout } from '@/lib/actions'

export const Logout = (): JSX.Element => {
    return (
       <form action={doSocialLogout}>
        <button type="submit">Logout</button>
       </form>
    )
}