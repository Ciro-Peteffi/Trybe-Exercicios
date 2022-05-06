import React from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends React.Component {
  render() {
    return (
      <>
        {conteudos.map((conteudo, index) => {
          return (
            <div key={index}>
              <h3>O conteúdo é: {conteudo.conteudo}</h3>
              <h3>Status: {conteudo.status}</h3>
              <h3>Bloco: {conteudo.bloco}</h3>
            </div>
          );
        })}
      </>
    );
  }
}

export default Content;
