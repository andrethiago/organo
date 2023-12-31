import './Formulario.css'
import CampoTexto from '../CampoTexto' // esse import é mais curto, sem necessidade do caminho completo, por conta do index.js
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao';

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

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio="true" label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio="true" label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio="true" label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;