
/*
import getData from './api.js'


const charactersContainer =  document.getElementById('characters')
const loading = document.getElementById('loading')



const getCharacters = async (filter, callback) => {
  const data = await getData(filter)

  loading.style.display = 'none'
  charactersContainer.innerHTML = ''


  if(data.results) {
    data.results.forEach(character => {
      renderCharacter(character)
    })
  } else {
    loading.style.display = 'block'
  }

  if(callback) callback()

  forCharacters()
}


const showCharacter = async (id) => {
  loading.style.display = 'block'
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await res.json()

  console.log(character)

  charactersContainer.className = 'card-group characters-big'
  charactersContainer.innerHTML = `
    <article class="character character-big">
      <img src=${character.image} alt=${character.name}>
      <div class="character-text">
        <h2 class="character-title">${character.name}</h2>

        <p class="character-category">Gender:</p>
        <span class="character-gender">${character.gender}</span>

        <p class="character-category">Species:</p>
        <span class="character-gender">${character.species}</span>

        <p class="character-category">Status:</p>
        <span class="character-gender">${character.status}</span>

        <p class="character-category">Origin:</p>
        <span class="character-gender">${character.origin.name}</span>
      </div>
    </article>
  `

  loading.style.display = 'none'
}



const renderCharacter = ( {image, name, gender, species, id}) => {
  const card = document.createElement('article')
  card.className = `character`
  card.id = `character-${id}`
  card.innerHTML = `
    <img src=${image} />
    <div class="character-text">
      <h3 class="character-title">${name}</h3>

      <p class="character-category">Gender:</p>
      <span class="character-gender">${gender}</span>

      <p class="character-category">Species:</p>
      <span class="character-gender">${species}</span>
    </div>
  `
  charactersContainer.appendChild(card)
}


const forCharacters = () => {
  document.querySelectorAll('.character').forEach(character => {
    character.addEventListener('click', () => {
      const id = character.id.slice(10)
      showCharacter(id)
    })
  })
}



export {getCharacters, renderCharacter, showCharacter, forCharacters}
*/