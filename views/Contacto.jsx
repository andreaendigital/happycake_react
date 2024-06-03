import { Button, Form } from 'react-bootstrap'

const Contacto = () => {
  return (
    <>
      <h2 className='mt-4 text-center fw-bold'>Cuéntanos, ¿cómo podemos ayudar?</h2>
      <Form className='mx-5 mt-3'>
        <Form.Group className="mb-3 fs-4 fw-bold" controlId="formBasicEmail">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu súper correo ! 📧" />
        </Form.Group>

        <Form.Group className='fs-4 fw-bold'>
          <Form.Label>Consulta:</Form.Label>
          <Form.Control
            placeholder='Escribe aquí tu consulta y te responderemos a la brevedad'
            as="textarea"
            style={{ height: '100px' }}
          />
        </Form.Group>
        <Form.Group className='text-center'>
          <Button className='mt-3 fw-bold' bg="danger" variant="danger">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default Contacto;