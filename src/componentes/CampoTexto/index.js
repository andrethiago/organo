import './CampoTexto.css'

// a sintaxe abaixo, com arrow function, é similar, em termos de resultado, à declaração da funcion que
// foi feita no componente Banner; a vantagem aqui, dentre outras, é que resolvemos alguns problemas relacionados a escopo
const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder} 
            />
        </div>
    )
}

export default CampoTexto;