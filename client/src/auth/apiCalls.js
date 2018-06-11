
// api call to backend database for login - returns a user object and token
export function loginUser(loginParams){
    return fetch(`http://localhost:3000/login`, {
        method: 'post',
        body: loginParams,
        headers: {
          "Content-Type":"application/json",
        }
      })
        .then((result) => {
          return result.json();
        })
  }
  
// api call to backend to register a user - returns a user object
export function registerUser(registerParams){
  return fetch(`http://localhost:3000/register`, {
    method: 'post',
    body: registerParams,
    headers: {
      "Content-Type":"application/json",
    }
  })
    .then((result)=>{
      return result.json();
    })
}


//SearchPage component API call to themoviedb api by search term
export function showSearch(searchTerm){
  const api_key = '7aef75bc62baea2317cbec8e9f5c5c61'
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}`,{
    method: 'GET',
  })
  .then((result)=>{
    return result.json();
  })
}

//ShowDetail component API call to call themoviedb api by specific show
export default function movieDetail(movie_id){
  const api_key = '7aef75bc62baea2317cbec8e9f5c5c61'
  return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`,{
    method: 'GET',
  })
  .then((result)=>{
    return result.json();
  })
}