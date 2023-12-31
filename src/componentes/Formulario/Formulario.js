import './Formulario.css'
import CampoTexto from '../CampoTexto' // esse import é mais curto, sem necessidade do caminho completo, por conta do index.js
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')    

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
        props.aoSalvar({
            nome, 
            cargo, 
            imagem, 
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                />
                <CampoTexto 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                />
                <CampoTexto 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                />
                <ListaSuspensa 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    obrigatorio={true}
                    label="Time"
                    itens={times} 
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;