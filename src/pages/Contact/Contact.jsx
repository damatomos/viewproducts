import React from "react";

import './Contact.css';

import image from '../../assets/contato.jpg';
import Head from "../../components/Head/Head";

function Contact() {
  return (
    <section className="Contact">
      <Head title="Contato" description={"Tela de contato"} />
      <img className="animLeft" src={image} alt="contato" />
      <div className="ContactContent animLeft">
        <h2>Entre em contato.</h2>
        <span className="ContactItem">bluejaygm@gmail.com</span>
        <span className="ContactItem">(00)90000-0000</span>
        <span className="ContactItem">Rua do Zé, 22/4</span>
      </div>
    </section>
  );
}

export default Contact;