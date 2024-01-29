import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

export default function Home({Child}) {

  const {userName} = useParams()

  return (
    <div>
      <Navbar />
      <h1> {userName} </h1>
    </div>
  )
}
