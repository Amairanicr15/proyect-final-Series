import { useState } from 'react'

const Button = ({ getInput }) => {
  const [input, setInput] = useState('')
  const onClick = (input) => {
    console.log(input)
  }

  return (
    <>
      <form className='d-flex' role='search'>
        <input value={input} onChange={(e) => setInput(e.target.value)} className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
        <button onClick={() => onClick(input)} className='btn btn-outline-success' type='button'>Search</button>
      </form>
    </>
  )
}
export default Button
