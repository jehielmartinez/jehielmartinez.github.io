import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'

export default function About ({ about }) {
  const [aboutString, setAboutString] = useState('')

  useEffect(() => {
    if (about) {
      window
        .fetch(about)
        .then((res) => res.text())
        .then((text) => setAboutString(text))
    }
  }, [about])

  return (
    <section className='mycard about-card'>
      <div className='mycard__header'>
        <h2>
          <FontAwesomeIcon icon={faUserTie} /> About
        </h2>
      </div>
      <p className='about-card__text'>
        <ReactMarkdown source={aboutString} />
      </p>
    </section>
  )
}
