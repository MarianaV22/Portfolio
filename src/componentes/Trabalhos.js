import React, { useState } from 'react'
import './Trabalhos.css'

export default function Trabalhos() {
  const cardsData = [
    {
      id: 1,
      title: "E-OWL v2",
      content: "Projeto Final de licenciatura",
      imageUrl: "/imagens/mocho.png",
      videoUrl: "/videos/eowl.mp4",
      description: [
        "E-OWL v2 nasceu no meu Trabalho de Fim de Curso da unidade curricular de Projeto Final, quando me foi lançado o desafio de transformar por completo a plataforma de ensino usada em algumas UCs do IPVC.",
        "Atualmente o protótipo está em fase de testes internos e, embora ainda não esteja online, ganhou uma nova vida face à versão antiga.",
      ],
      features: [
        "1. Acompanhamento do progresso do aluno com gráficos",
        "2. Perguntas dinâmicas que se adaptam ao ritmo de estudo do aluno",
        "3. Interface 100% responsiva",
      ],
    },
    {
      id: 2,
      title: "BIBO.",
      content: "Trabalho Prático para unidade curricular",
      imageUrl: "/imagens/Bibo.png",
      description: [
        "O BIBO. foi desenvolvido como trabalho prático para a unidade curricular de Tecnologias e Desenvolvimento Web, com foco em design de interfaces intuitivas.",
        "A ideia surgiu de criar uma biblioteca online intuitiva, onde o utilizador pode pesquisar títulos, consultar disponibilidade e descobrir onde adquirir os livros — presencialmente ou em lojas online.",
      ],
      features: [],
    },
    {
      id: 3,
      title: "Flyer",
      content: "Flyer Informativo · Projeto DigiMidea UA",
      imageUrl: "/imagens/Flyer.png",
      description: [
        "Flyer Inclusivo é um projeto do laboratório DigiMidea da Universidade de Aveiro.",
        "O projeto surgiu pela necessidade de informar os problemas que as pessoas com deficiência enfrentam.",
        "O Flyer dá a conhecer que tipos de deficiência existem e que apoios estão disponíveis, especialmente na cidade de Aveiro.",
      ],
      features: [],
    },
    {
      id: 4,
      title: "Web Explicações",
      content: "Projeto em parceria com …",
      imageUrl: "/imagens/webExplica.png",
      videoUrl: "/videos/web.mp4",
      description: [
        "Web Explicações é uma plataforma de tutoria online pensada para alunos do ensino secundário, desenvolvida em parceria com a empresa FTKode.",
        "Permite aceder a material didático personalizado e acompanhar o progresso dos alunos.",
      ],
      features: [],
    },
    {
      id: 5,
      title: "Concurso Logo Escola Caminha",
      content: "Identidade visual",
      imageUrl: "/imagens/Logo.png",
      description: [
        "Participação no concurso de criação de logotipo para uma Escola de Caminha.",
        "O conceito partiu em criar uma identidade gráfica que refletisse a herança histórica do concelho e reforçasse a ponte simbólica entre a comunidade e a educação.",
      ],
      features: [],
    },
    {
      id: 6,
      title: "Coffee Twin",
      content: "Design de interface e roll-up",
      imageUrl: "/imagens/roll.png",
      description: [
        "O Coffee Twin surgiu de um desafio colocado pelo Lia (laboratório de interações audiovisuais) da ESTG IPVC em criar um roll-up que representasse o projeto desenvolvido pela equipa e interfaces intuitivas para os utilizadores.",
      ],
      features: [],
    },
    {
      id: 7,
      title: "YU",
      content: "Projeto CBL · Mestrado em CTW",
      imageUrl: "/imagens/YU.png",
      description: [
        "YU é uma aplicação mobile criada no âmbito de Challenge-Based Learning (CBL) do 1.º ano do Mestrado em Comunicação e Tecnologias Web da Universidade de Aveiro.",
        "Tem como objetivo ajudar jovens de 14 a 18 anos a reduzir o uso excessivo do telemóvel através de pequenas atividades offline focadas no bem-estar.",
        "Cada tarefa concluída recompensa o utilizador com estrelas, que podem ser trocadas por itens de personalização da mascote virtual YU.",
        "A funcionalidade “Parceria” permite que dois utilizadores atribuam e acompanhem tarefas um do outro, promovendo motivação mútua.",
        "O design combina elementos de gamificação, wellness e usabilidade offline, com interface intuitiva e acessível.",
      ],
      features: [
        "Gamificação com sistema de estrelas e avatar customizável",
        "Parcerias colaborativas entre utilizadores",
        "Interface responsiva e focada em acessibilidade",
      ],
      linkUrl:  "https://www.instagram.com/yu_mctw/",
      linkText: "Ver mais sobre o YU",
    },
    {
      id: 8,
      title: "Rorisat",
      content: "Design de interface",
      imageUrl: "/imagens/rorisat.png",
      description: [
        "A Rorisat pediu-me para criar um design de interface simples mas informativa, com o intuito de chegar ao maior número de clientes e mostrar os serviços prestados pela empresa.",
      ],
      features: [],
    },
  ]

  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className="cards-section">
      <h1 className="cards-title">Os meus trabalhos</h1>

      <div className="cards-container">
        {cardsData.map(card => (
          <div
            key={card.id}
            className="card"
            onClick={() => setActiveCard(card)}
          >
            <img
              src={"/Portfolio" + card.imageUrl}
              alt={card.title}
              className="card-image"
            />
            <div className="card-overlay">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>

      {activeCard && (
        <div className="modal-backdrop" onClick={() => setActiveCard(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {/* Coluna 1: imagem */}
            <div className="modal-image-container">
              <img
                src={"/Portfolio" + activeCard.imageUrl}
                alt={activeCard.title}
                className="modal-image-main"
              />
            </div>

            {/* Coluna 2: conteúdo */}
            <div className="modal-info">
              <div className="modal-header">
                <h2>{activeCard.title}</h2>
                <button
                  className="modal-close"
                  onClick={() => setActiveCard(null)}
                >
                  ×
                </button>
              </div>

              {/* descrições */}
              <div className="modal-description">
                {activeCard.description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

              {/* features */}
              {activeCard.features.length > 0 && (
                <div className="modal-features">
                  {activeCard.features.map((feat, i) => {
                    const textoLimpo = feat.replace(/^\s*\d+\.\s*/, '')
                    return (
                      <p key={i}>
                        <strong>{i + 1}.</strong> {textoLimpo}
                      </p>
                    )
                  })}
                </div>
              )}

              {/* link do YU */}
              {activeCard.linkUrl && (
                <div className="modal-link">
                  <a
                    href={activeCard.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {activeCard.linkText}
                  </a>
                </div>
              )}

              {/* vídeo */}
              {activeCard.videoUrl && (
                <div className="modal-video-container">
                  <video
                    className="modal-video-player"
                    src={activeCard.videoUrl}
                    controls
                  >
                    O seu browser não suporta o elemento <code>video</code>.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
