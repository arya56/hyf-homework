
const search = document.getElementById('searchText')
const resultNumber = document.getElementById('number')
const button = document.querySelector('button')
const div = document.getElementById('center')

search.addEventListener('change',startSearch)


   function startSearch(){
      if (search.value){
      div.innerHTML = 'Please enter number to start search or just press button!'
      button.addEventListener('click',searchButton)

   }
      else{
         div.innerHTML = 'Please fill the search term!'
      }
   }

            function searchButton(){
            div.innerHTML = '';
               if (resultNumber.value!='Number of gifs'){
               fetchGif(search.value,resultNumber.value)
            }
               else {
                  fetchGif(search.value,4)
               }
            }

                           function fetchGif(searchedText,result){
                              
                              fetch(`https://api.giphy.com/v1/gifs/search?api_key=KQts96LdKnKMTjsNCyWmY5NqV43J0lkq&q=${searchedText}&limit=${result}&offset=0&rating=g&lang=en`)
                           .then( (response) => response.json())
                           .then((giphy)=>giphy.data.forEach(item=> { 

                                 const image = document.createElement('img')
                                 image.src = item.images.downsized_medium.url
                                 image.className = 'center2'
                                 div.appendChild(image)

                           }))}
