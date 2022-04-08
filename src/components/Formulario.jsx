import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import { useState } from 'react'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('')

    const { categorias } = useCategorias()
    const { consultarBebidas } = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')
        consultarBebidas(busqueda)
        setBusqueda({
            nombre: '',
            categoria: ''
        })
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
        { alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert> }
            <Row className='form'>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label
                            className="text-white"
                            htmlFor='nombre'
                        >Tipo de Licor</Form.Label>
                        <Form.Control
                            id='nombre'
                            type='text'
                            placeholder='Ej: Vodka, Rum, Tequila, etc.'
                            name='nombre'
                            className='form-input'
                            value={busqueda.nombre}
                            onChange={ e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group>
                        <Form.Label
                            className="text-white"
                            htmlFor='categoria'
                        >Categoria de la bebida</Form.Label>
                        <Form.Select
                            id='categoria'
                            name='categoria'
                            value={busqueda.categoria}
                            onChange={ e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        >
                            <option value=''>Elije una Categoria</option>
                            {categorias.map( categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Row className='justify-content-center'>
                    <Col md={3}>
                        <Button 
                            className='rounded-pill w-100 mt-2 btn btn-info shadow text-white'
                            type='submit'
                        >
                            Buscar Bebidas
                        </Button>
                    </Col>
                </Row>
            </Row>
        </Form>
    )
}

export default Formulario