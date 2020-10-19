const movie_Api = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
const badTitlesAfter2000 = []

async function getBadMovies(){
    try{
            const movieResponse = await fetch(movie_Api)
            const movies = await movieResponse.json()
            const badRated =  movies.filter(movie=>movie.rating < 3)
            const badRatedAfter2000 = badRated.filter(movie => movie.year >= 2000)
        // this is extra an Array of bad movies after2000 titles
            badRatedAfter2000.forEach(movie => badTitlesAfter2000.push(movie.title))

            console.log('Movies rated less than 3 : ',badRated);
            console.log('Bad movies after 2000 : ',badRatedAfter2000);
            console.log('Bad titles after 2000 : ',badTitlesAfter2000);

    }catch(error){
        console.log(error);
    }
}

getBadMovies()