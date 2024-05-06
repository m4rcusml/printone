import Image from 'next/image';
import styles from './styles.module.css';
import Link from "next/link";

export function BigButton({ title, rediretTo = '', iconSrc }) {
    return (
        <Link
            className={styles.container}
            href={rediretTo}
        >
            <Image
                src={iconSrc}
                height={100}
            />
            {title}
        </Link>
    )
}