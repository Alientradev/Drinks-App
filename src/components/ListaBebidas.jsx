import { Row } from 'react-bootstrap'
import useBebidas from "../hooks/useBebidas"
import Bebida from './Bebida'

const ListaBebidas = () => {

    const { bebidas } = useBebidas()

    return (
        <Row>
            {bebidas.map( bebida => (
                <Bebida
                    key={bebida.idDrink}
                    bebida={bebida}
                />
            ))}
        </Row>
    )
}

export default ListaBebidas