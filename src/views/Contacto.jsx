import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
  return (
    <div className='contentForm'>
      <Form>
      <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          abc@abc.cl
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="text" placeholder="Escriba su mensaje aquí..." />
      </Form.Group>
     
      <Button className='glow-on-hover' variant="info" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  
  );
}

export default Contacto;