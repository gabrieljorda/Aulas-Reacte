export function Country({ data }) {
  const currencies = Object.entries(data.currencies)

  return (
    <div className='country'>
      <img src={data.flags.svg} alt='texto-alternativo' />
      <h3>{data.name.common}</h3>
      <p>Continente: {data.continents}</p>
      <p>Capital: {data.capital}</p>
      <p>População do país: {data.population}</p>
      {/* Forma de pegar o nome da moeda */}
      <p>Moeda do país: {currencies.map((currency) => currency[1].name)}</p>
      <p>Línguas comuns: {data.languages.por}</p>
    </div>
  )
}