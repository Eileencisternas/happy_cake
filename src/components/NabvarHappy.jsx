import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import logo from "../asset/img/logo.png"
export default function NavbarHappy() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-start">
                    <Navbar.Brand> <img src={logo} alt="" className="logo" /></Navbar.Brand>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        Contacto
                    </Link>
                </Container>
            </Navbar>
        </>
    );
}
