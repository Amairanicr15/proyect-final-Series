import Header from './components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Card from './components/Card'

function App () {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [input, setInput] = useState('Girls')
  const peticionGet = () => {
    axios.get(`https://api.tvmaze.com/search/shows?q=girls${input}`)
      .then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    peticionGet()
  },
  [])

  return (
    <section className='container py-4'>
      <div className='row gy-4'>
        <Header />
        <div className='container mt-5 mg-2'>
          <h1>Buscador de Series</h1>
        </div>
        <Button />
        <Card />
      </div>
    </section>
  )
}

export default App
