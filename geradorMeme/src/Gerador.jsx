
import gerador from './gerador.css'
import React from 'react'
import { useEffect } from 'react'
function Gerador() {
  // cria um estado com meme com inicio de objeto  meme = { topText: "", bottomText:"", randomImage:""}
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  // cria um estado com memeDados com todos os memes 

  let [allMemesImages, setAllMemesImages] = React.useState()

  // Consumo de API e usando use
let dataLocal
  useEffect( ()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => {dataLocal = data 
    
      setAllMemesImages(allMemesImages = dataLocal.data.memes)
    
    });
    console.log(allMemesImages)

  }, [])
  

  function logUrl() {
    let memesArray = allMemesImages

    let indiceAleatorio = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[indiceAleatorio].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  

  }

  function handleChange(event) {
    let { name, value } = event.target
    setMeme(prevMeme => (
      {
        ...prevMeme,
        [name]: value
      }
    ))
  }
  return (
    <div className="Gerador">
      <div className='entradas'>
        <div className="primeiro--input ui input">
          <input type="text" onChange={handleChange}
            name='topText'
            value={meme.topText}
            placeholder="" />
        </div>
        <div className="segundo--input ui input">
          <input type="text" onChange={handleChange} name='bottomText' value={meme.bottomText} placeholder="" />
        </div>

      </div>
      <div className='meme'>
        <img className='img--gerada' src={meme.randomImage} />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
      <button onClick={logUrl} className="botao-pesquisa ui primary button">Buscar nova imagem de meme</button>
    </div>

  )
}

export default Gerador
