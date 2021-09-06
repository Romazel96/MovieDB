const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

const apiUrl ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e5cff0382865b2c20082717f56f4269e'
const urlImg= "https://image.tmdb.org/t/p/w500"
const main = document.querySelector('.movie-section')

getMovies(apiUrl)

// async function getMovies(url) {
//   let nameMovie = document.querySelector('.input').value
//   document.querySelector('.btn_search')
//     const response = await fetch(`${url} + ${nameMovie}`)
//     const data = await response.json().then(data => {
// //    showMovies(data.results)
// })
// }

async function getMovies(url){
  const response = await fetch(url)
  const data = await  response.json()
  showMovies(data.results)
}

    function showMovies(data) {

      main.innerHTML = ''; // Очищает секцию Main
      data.forEach(movie => {
        const {title, poster_path, vote_average, overview, release_date} = movie; //
        const movieItem = document.createElement('div') // Создание нового div-элемента для каждого фильма
        movieItem.classList.add('movie') // Задание класса div-элементу
        // Описание HTML-разметки внутри div
        movieItem.innerHTML = ` 
          <img src="${urlImg + poster_path}" alt="${title}" class="movie-img">
            <div class="movie-info">
              <p class="movie-title">"${title}"</p>
              <p class="rating">Рейтинг:  <span class="${ratingColor(vote_average)}">${vote_average}</span> </p>
              <p class="release-date">Дата выхода: <br> ${release_date}</p>
            </div>
          <div class="description">
            <p>${overview}</p>
          </div>`
          main.appendChild(movieItem) // Добавление нового элемента в конец
      })
}

function ratingColor(vote_average){ // Функция для определения цвета шрифта рейтинга
  if (vote_average >= 8) {
     return 'rating-green'}
  else if (vote_average >= 5) {
    return 'rating-orange'}
  else {
    return 'rating-red'
  }
  }
