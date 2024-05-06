import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css';

import Logo from '@/assets/logo.png';

export function Header() {
    return (
        <header className={styles.container}>
            <Image src={Logo} alt='Logo' width={64} />
            <Link href={'login'} replace>
                Sair
            </Link>
        </header>
    )
}