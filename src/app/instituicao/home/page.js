import { BigButton } from '@/components/BigButton';
import { Header } from '@/components/Header';
import styles from './styles.module.css';

import IconCadastro from '@/assets/cadastro.png';
import IconAgrupamento from '@/assets/agrupamento.png';
import IconAnalise from '@/assets/analise.png';
import IconRegistro from '@/assets/registro.png';

export default function HomeInstituicao() {
    return (
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1031805295.
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <BigButton
                    title='Cadastro'
                    iconSrc={IconCadastro}
                    rediretTo='cadastrar_usuario'
                />
                <BigButton
                    title='Agrupamento'
                    iconSrc={IconAgrupamento}
                    rediretTo='agrupamento'
                />
                <BigButton
                    title='Análise'
                    iconSrc={IconAnalise}
                    rediretTo='analise'
                />
                <BigButton
                    title='Registro'
                    iconSrc={IconRegistro}
                    rediretTo='registro'
                />
            </main>
        </div>
    )
}