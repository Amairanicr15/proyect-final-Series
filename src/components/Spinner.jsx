import reloj from '../assets/200.gif'

const Spinner = () => {
  return (
    <img src={reloj} style={{ width: '200px', margin: 'auto', display: 'block' }} alt='Cargando...' />
  )
}

export default Spinner
