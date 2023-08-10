import React from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'

function index() {
  const { id } = useParams()
  
  return (
    <section className="container__cities">
      <h2>Site under construction</h2>
      <h3>{ id ? `ID N°: ${id}` : '' }</h3>
    </section>
  )
}

export default index