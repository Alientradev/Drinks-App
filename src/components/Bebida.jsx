import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {

    const { strDrink, strDrinkThumb, idDrink } = bebida
    const { handleModalClick, handleBebidaId } = useBebidas()

    return (
        <Col md={6} lg={3}>
            <Card className='mt-4'>
                <Card.Img 
                    variant="top" 
                    src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}
                />
                <Card.Body>
                    <Card.Title>{strDrink}</Card.Title>
                    <Button 
                        className='rounded-pill w-100 mt-2 btn btn-info shadow text-white'
                        type='submit'
                        onClick={ ()=>{
                            handleModalClick()
                            handleBebidaId(idDrink)
                        }}
                    >Ver Receta</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida