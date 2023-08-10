import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './styles.css'

import DB from '../../db/data.json'

function index({ slide }) {
  /*const [data, setData] = useState([])

  useEffect(
    ()=>{apiFetch()},
    [slide]
  )

  const apiFetch = () => {
    fetch('http://localhost:5173/src/db/data.json')
    .then(res => res.json())
    .then(dataFetch => { setData(dataFetch) })
    .catch(err => console.log(err))
  }*/

  let arrObj = []

  let obtnerCuatro = () => {
      //arrObj = data.slice(slide * 4,(slide + 1) * 4)
      arrObj = DB.slice(slide * 4,(slide + 1) * 4)
  }

  obtnerCuatro()
return (
    <div className='carrouserl__container'>
      <div className='cards__container'>
        {arrObj.map((elem)=><Card key={elem.id} ciudad={elem.ciudad} pais={elem.pais} imagen={elem.imagen}/>)}
      </div>
      <h3 className='slideCounter'>{slide + 1}/3</h3>
    </div>
  )
}

export default index