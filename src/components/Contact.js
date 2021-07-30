import emailjs from "emailjs-com";
import React from "react";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "my_gmail",
        "template_mimi",
        e.target,
        "user_rmIxx7DLJE8HqE5JGp2v2"
      )

      .then(
        (result) => {
          alert("Mensaje enviado con éxito! 👍");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }
  return (
    <div className="footer">
      <div className="main-content">
        <div className="left box">
          <h2>Nosotros</h2>
          <div className="content">
            <p>
              Nuestro principal objetivo es brindar un excelente servicio, por
              eso al contratarnos, te garantizamos la entrega de forma puntual y
              el óptimo funcionamiento de los juegos.
            </p>
            <div class="social">
              <div className="phone">
                <span className="fas fa-phone-alt"></span>
                <span className="text">+54-1121836557</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className="text">mimijuegosinflables@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Te ofrecemos</h2>
          <div className="content">
            <ul className="list">
              <li>Castillos inflables de difernetes tamaños</li>
              <li>Ring de boxeo</li>
              <li>Tobogan gigante</li>
              <li>Metegol</li>
              <li>mini ping pong</li>
              <li>mini pool</li>
              <li>Equipamiento para karaoke</li>
            </ul>
          </div>
        </div>
        <div className="right box">
          <h2>Contactanos</h2>
          <div className="content">
            <form onSubmit={sendEmail}>
              <div className="email">
                <div className="text">Nombre</div>
                <input type="text" required name="name" />
              </div>
              <div className="email">
                <div className="text">Email</div>
                <input
                  type="email"
                  className="form-control"
                  required
                  name="email"
                />
              </div>
              <div className="msg">
                <div className="text">Mensaje</div>
                <textarea
                  id=""
                  cols="25"
                  rows="5"
                  required
                  name="message"
                ></textarea>
              </div>
              <div className="btn">
                <button type="submit">enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">
            Creado por <a href="https://www.debora-zarate.com">Deza</a> |{" "}
          </span>
          <span className="far fa-copyright"></span>
          <span> 2020 Todos los derechos reservados</span>
        </center>
      </div>
    </div>
  );
}
