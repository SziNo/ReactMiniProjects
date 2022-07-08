import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  let [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (num) =>
    num > people.length - 1 ? 0 : num < 0 ? people.length - 1 : num

  const prevPerson = () => setIndex(checkNumber(--index))
  const nextPerson = () => setIndex(checkNumber(++index))
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)

    if (randomNumber === index) {
      randomNumber = index + 1
    }

    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review
