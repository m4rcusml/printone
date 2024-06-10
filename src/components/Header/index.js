'use client'
import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css';

import Logo from '../../assets/logo.png';
import { usePathname, useRouter } from "next/navigation";

export function Header() {
    const pathname = usePathname();
    
    console.log(pathname)
    
    return (
        <header className={styles.container}>
            <Image src={Logo} alt='Logo' width={64} />

            <div style={{ display: 'flex', gap: '1em' }}>
                {pathname !== '/instituicao/home' && <Link href={'home'} replace>
                    Voltar ao início
                </Link>}
                <Link href={'login'} replace>
                    Sair da conta
                </Link>
            </div>
        </header>
    )
}