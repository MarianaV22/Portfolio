import React from 'react';
import './Mariana.css';

const skillsData = [
  { name: 'Adobe Illustrator', percentage: 85, className: 'adobei' },
  { name: 'Adobe Effects',    percentage: 15, className: 'after' },
  { name: 'Adobe XD',         percentage: 80, className: 'xd' },
  { name: 'Adobe Premiere',   percentage: 55, className: 'premier' },
  { name: 'Adobe Photoshop',  percentage: 10, className: 'photo' },
  { name: 'Maya',              percentage:  5, className: 'maya' },
  { name: 'HTML',             percentage: 85, className: 'html' },
  { name: 'CSS',              percentage: 85, className: 'css' },
  { name: 'Java Script',      percentage: 85, className: 'js' },
  { name: 'Java',             percentage: 65, className: 'java' },
  { name: 'Figma',            percentage: 85, className: 'figma' },
  { name: 'MySQL',            percentage: 55, className: 'mysql' },
  { name: 'React',            percentage: 85, className: 'react' },
  { name: 'Laravel',          percentage: 85, className: 'laravel' },
  { name: 'PHP',              percentage: 75, className: 'php' },
  { name: 'Ionic',            percentage: 35, className: 'ionic' },
  { name: 'Mongo',            percentage: 65, className: 'mongodb' }
];

// Usamos apenas estes três tons, ciclando entre eles
const colorPalette = ['#E0CC5B', '#268373', '#B66F9E'];

function Mariana() {
  return (
    <div className="mariana-wrapper">
      {/* Card principal */}
      <br />
      <div className="mariana-card">
        <div className="mariana-container">

          {/* Coluna 1 */}
          <div className="mariana-column">
            <div className="title-container">
              <h1 className="titulo" style={{ color: '#E0CC5B' }}>Olá</h1>
              <div className="linha" style={{ background: '#E0CC5B' }} />
            </div>
            <img src="/Portfolio/imagens/eu.png" alt="Foto de Mariana" className="mariana-photo" />
            <p>
             Ao longo do meu percurso académico, desenvolvi um interesse especial pela área da experiência de utilizador (UX), como criar interfaces acessíveis, funcionais e intuitivas. Gosto de trabalhar nesta área porque motiva-me pensar em soluções centradas nas pessoas, que respondam a diferentes necessidades e garantam uma boa usabilidade.
            </p>
          </div>

          {/* Coluna 2 */}
          <div className="mariana-column">
            <div className="title-container">
              <h1 className="titulo" style={{ color: '#268373' }}>Sobre mim</h1>
              <div className="linha" style={{ background: '#268373' }} />
            </div>
            <div className="mariana-profile-contact">
              <p><strong>Nome:</strong> Mariana Veiga</p>
              <p><strong>Localidade:</strong> Vila Real, Portugal</p>
            </div>
            <div className="title-container">
              <h1 className="titulo" style={{ color: '#B66F9E' }}>Línguas</h1>
              <div className="linha" style={{ background: '#B66F9E' }} />
            </div>
            <p>
              <strong>Português:</strong>&nbsp;
              <span className="star-rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
              </span>
            </p>
            <p>
              <strong>Inglês:</strong>&nbsp;
              <span className="star-rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </span>
            </p>
          </div>

        </div>
      </div>

      {/* Conteúdos adicionais */}
      <div className="additional-container">

        {/* Percurso Académico */}
        <div className="academic-column">
          <h1 className="titulo" >Meu Percurso Académico</h1>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p><strong>2019/2021</strong></p>
                <p>Ensino secundário em Ciências e Tecnologias.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p><strong>2021/2024</strong></p>
                <p>Licenciatura em Computação Gráfica e Multimédia.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p><strong>2024–2026</strong></p>
                <p>Mestrado em Comunicação e Tecnologias Web.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Softwares/Ferramentas/Tecnologias */}
        <div className="software-column">
          <h1 className="titulo">Softwares/Ferramentas/Tecnologias</h1>
          <div className="software-list">
            {skillsData.map(({ name, percentage, className }, index) => {
              const barColor = colorPalette[index % colorPalette.length];
              return (
                <div className="software-item" key={name}>
                  <img
                    src={`/Portfolio/icons/${className}.png`}
                    alt={name}
                    className="software-icon"
                  />
                  <div className="software-info">
                    <span className="software-name">{name}</span>
                    <div className="software-bar">
                      <div
                        className="software-progress"
                        data-label={`${percentage}%`}
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: barColor
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Mariana;
