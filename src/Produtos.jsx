import React from "react";
import Container from "./Container";

const Produtos = () => {

  const instrumentos = [
    {titulo: "Cordas Friccionadas",
    imgSrc: "/img/corda-fric-img.jpg",
    },
    {titulo: "Cordas Dedilhadas",
    imgSrc: "/img/corda-ded-img.jpg",
    },
    {titulo: "Pianos",
    imgSrc: "/img/piano-img.jpg",
    },
    {titulo: "Teclados",
    imgSrc: "/img/teclado-img.jpg",
    },
    {titulo: "Sintetizadores",
    imgSrc: "/img/sintetizador-img.jpg",
    },
    {titulo: "Sopro",
    imgSrc: "/img/sopro-img.jpg",
    },
    {titulo: "Metais",
    imgSrc: "/img/metais-img.jpg",
    },
    {titulo: "Percussivos",
    imgSrc: "/img/percussivo-img.jpg",
    },
    {titulo: "Acessórios",
    imgSrc: "/img/acess-img.jpg",
    },
  ]

  return (
    <div className="produtos">
      <Container>
          <h1>O que você procura?</h1>
          <div className="produtos-grid">
            {instrumentos.map((instrumento, index) => (
              <div key={index} className="produto-item">
                <a href="#">
                  <img src={instrumento.imgSrc} alt={instrumento.titulo} />
                  <h1>{instrumento.titulo}</h1>
                </a>
              </div>
            ))}
          </div>
      </Container>
    </div>
  )
}

export default Produtos;
