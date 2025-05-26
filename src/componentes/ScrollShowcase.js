/* src/ScrollShowcase.js
import React, { useEffect } from 'react'
import './ScrollShowcase.css'

export default function ScrollShowcase() {
  useEffect(() => {
    import('https://cdn.skypack.dev/gsap@3.12.0').then(gsapModule => {
      import('https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger').then(triggerModule => {
        import('https://cdn.skypack.dev/tweakpane@4.0.4').then(({ Pane }) => {
          const gsap = gsapModule.default;
          const ScrollTrigger = triggerModule.default;
          gsap.registerPlugin(ScrollTrigger);

          const config = {
            theme: 'dark',
            animate: true,
            snap: true,
            start: gsap.utils.random(0, 100, 1),
            end: gsap.utils.random(900, 1000, 1),
            scroll: true,
            debug: false,
          }

          const items = gsap.utils.toArray('ul li')

          const update = () => {
            document.documentElement.dataset.theme = config.theme
            document.documentElement.dataset.syncScrollbar = config.scroll
            document.documentElement.dataset.animate = config.animate
            document.documentElement.dataset.snap = config.snap
            document.documentElement.dataset.debug = config.debug
            document.documentElement.style.setProperty('--start', config.start)
            document.documentElement.style.setProperty('--hue', config.start)
            document.documentElement.style.setProperty('--end', config.end)
          }

          update()

          // ScrollTrigger animation
          const dimmer = gsap
            .timeline()
            .to(items.slice(1), {
              opacity: 1,
              stagger: 0.5,
            })
            .to(
              items.slice(0, items.length - 1),
              {
                opacity: 0.2,
                stagger: 0.5,
              },
              0
            )

          ScrollTrigger.create({
            trigger: items[0],
            endTrigger: items[items.length - 1],
            start: 'center center',
            end: 'center center',
            animation: dimmer,
            scrub: 0.2,
          })
        })
      })
    })
  }, [])

  return (
    <>
      
      <main>
        <section className="content fluid">
          <h2><span aria-hidden="true">O que consigo fazer&nbsp;</span></h2>
          <ul aria-hidden="true" style={{ '--count': 22 }}>
            <li style={{ '--i': 0 }}>design gráfico.</li>
            <li style={{ '--i': 1 }}>UX / UI  .</li>
            <li style={{ '--i': 2 }}>front-end.</li>
            <li style={{ '--i': 3 }}>beckend.</li>
            <li style={{ '--i': 4 }}>um pouco de tudo.</li>
          </ul>
        </section>
  
      </main>
    </>
  )
}*/
 

// src/ScrollShowcase.js

// src/ScrollShowcase.js

// src/ScrollShowcase.js

// src/ScrollShowcase.js

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './ScrollShowcase.css'

gsap.registerPlugin(ScrollTrigger)

// As tuas skills em Português
const words = [
  'design gráfico.', 'UX/UI.', 'programar.', 
  'criar coisas novas.', 'um pouco de tudo...'
]

// Cores a ciclar
const colors = ['#E0CC5B', '#268373', '#B66F9E']

export default function ScrollShowcase() {
  const wordRef     = useRef(null)
  const perWord     = 80                       // px de scroll por palavra
  const totalHeight = words.length * perWord   // ex.: 5 * 80 = 400px

  useEffect(() => {
    const obj = { i: 0 }
    gsap.to(obj, {
      i: words.length - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.word-section',
        start:   'top top',
        end:     `+=${totalHeight}px`,
        scrub:   true,
      },
      onUpdate: () => {
        const idx = Math.round(obj.i)
        wordRef.current.textContent = words[idx]
        wordRef.current.style.color   = colors[idx % colors.length]
      }
    })
  }, [])

  return (
    <section
      className="word-section"
      style={{
        minHeight: `calc(${totalHeight}px + 100vh)`,
        paddingTop: '20vh'
      }}
    >
      <div className="headline-container">
        <h1 className="static">Consigo</h1>
        <h1 className="dynamic">
          <span ref={wordRef}>{words[0]}</span>
        </h1>
      </div>
    </section>
  )
}


