
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


//SearchPage component API call to tvmaze.com API
export function showSearch(searchTerm){
  return fetch(`http://api.tvmaze.com/search/shows?q=${searchTerm}`,{
    method: 'GET',
    max_results: 50
  })
  .then((result)=>{
    return result.json();
  })
}
