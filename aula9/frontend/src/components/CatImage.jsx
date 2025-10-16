import React, { useState } from 'react';
import axios from 'axios';

const CatImage = () => {
  const [image, setImage] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('http://localhost:8080/random-cat');
      setImage(response.data[0].url);
    } catch (error) {
      console.error('Erro ao obter imagem de gato:', error);
    }
  };

  return (
    <div>
      <h2>Imagem Aleatória de Gato</h2>
      <button onClick={fetchCatImage}>Obter Imagem</button>
      {image && <img src={image} alt="Gato" style={{ width: '300px', height: 'auto' }} />}
    </div>
  );
};

export default CatImage;