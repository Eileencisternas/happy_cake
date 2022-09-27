
import React from 'react'
import { Container } from "react-bootstrap";
import cake from "../asset/img/cake.jpg";


export default () => {

    return (
        <>
            <Container className="text-center">
                <h1 className="pt-5">
                    Bienvenido a <span className="fw-bold">Pasteles Felices</span>
                </h1>
                <img width="800" src={cake} alt='' className='glow-on-hover-img ' />
                <h5> El mejor lugar para disfrutar de algo dulce...</h5>
            </Container>

        </>
    )
}