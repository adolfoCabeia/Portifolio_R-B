"use client";

export default function Contacto() {
  return (
    <section className="contactSection container">
      <div className="contactContent">
        <h2 className="contactTitle">Vamos falar</h2>

        <p className="contactText">
          Se a música fez sentido para ti,  
          talvez valha a pena conversarmos.
        </p>

        <div className="contactActions">
          <a
            href="mailto:contacto@justify.com"
            className="contactBtn"
          >
            Enviar email
          </a>

          <a
            href="https://instagram.com/justify"
            target="_blank"
            className="contactBtn"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/244900000000"
            target="_blank"
            className="contactBtn"
          >
            WhatsApp
          </a>
        </div>

        <span className="contactNote">
          Respondo quando faz sentido.
        </span>
      </div>
    </section>
  );
}
