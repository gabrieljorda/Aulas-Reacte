import { useState } from 'react'
import './App.css'
import { Country } from './components/country'

export function App() {
  const [countryName, setCountryName] = useState('')
  const [country, setCountry] = useState([])

  const [error, setError] = useState('') // criamos um hook para criar uma mensagem de erro

  async function fetchCountry(event) {
    event.preventDefault()
		
		// caso o usuário não preencha o input
    if (!countryName) {
      setError('Preencha o campo com o nome do país')
      return
    }

		// Com essa sintaxe conseguimos pegar um erro por exemplo de "Not Found" dai passamos uma mensagem que o país não existe
    fetch(`https://restcountries.com/v3.1/translation/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Not Found') {
          setError('País não encontrado')
          setCountry([])
        }

        setCountry(data)
      })
      .catch((error) => {
        setError('Erro na busca do país, tente novamente')
        setCountry([])
      })
  }

  return (
    <div className='container'>
      <aside>
        <div className='sidebar'>
          <h1>Country Information</h1>

          <form onSubmit={fetchCountry}>
            <input
              onChange={(e) => {
                setCountryName(e.target.value)
              }}
              type='text'
              placeholder='Pesquise um país'
            />
            <button>Buscar</button>
          </form>
        </div>
      </aside>

      <main>
        {error ? (
          <p>{error}</p>
        ) : (
          country.map((country) => (
            <Country key={country.name.common} data={country} />
          ))
        )}
      </main>
    </div>
  )
}