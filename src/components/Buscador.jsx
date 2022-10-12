import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Buscador = () => {
  const [title, setTitle] = useState('')
  const { data } = useFetch('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log('title', title)
  }

  return (
    <div className='form-search'>
      <h2>Old Movies Finder</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Title serie' onChange={e => setTitle(e.target.value)} />
        <input type='submit' value='Search' />
      </form>
    </div>
  )
}

export default Buscador
