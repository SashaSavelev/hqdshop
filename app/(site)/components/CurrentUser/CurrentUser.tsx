import { FaUserAlt } from 'react-icons/fa';
import Image from 'next/image';
import { auth } from '@/auth';
import { Logout } from '../Logout/Logout';
import styles from './CurrentUser.module.css';
import cn from 'classnames';

const CurrentUser = async () => {
    const session = await auth();
    const name = session?.user?.name;
    return (
        <div className={styles.div}>
            <div className={styles.user}>
                {session?.user?.image ? (
                    <Image src={session?.user?.image} width={50} height={50} alt={session?.user?.name || 'user'} />
                ) : (
                    <FaUserAlt className={cn({
                        [styles.iconDisabled]: !session,
                        [styles.iconActive]: !!session
                    })} />
                )}

                <p>{name}</p>
            </div>
            {session && <Logout />}
        </div>
    );
};

export default CurrentUser;
