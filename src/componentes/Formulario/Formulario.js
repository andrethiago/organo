import './Formulario.css'
import CampoTexto from '../CampoTexto' // esse import é mais curto, sem necessidade do caminho completo, por conta do index.js
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';

const Formulario = () => {

    const times = [
        'Programaçao',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
            </form>
        </section>
    )
}

export default Formulario;