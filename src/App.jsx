import { Container } from 'react-bootstrap' 
import Formulario from './components/Formulario'
import ListaBebidas from './components/ListaBebidas'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import Imagen from './public/img/logo.gif'
import ModalWindow from './components/ModalWindow'

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>

        <header>
          <div className='logo'>
            <img src={Imagen} alt="Logo"/>
          </div>
        </header>

        <Container className='mt-5'>
          <Formulario />
          <ListaBebidas/>
        </Container>

        <ModalWindow/>

      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
