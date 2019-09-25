export function getNumberTrivia(number) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://numbersapi.com/${number}?trivia`
  )
    .then((response) => response.text())
    .then((response) => ({
      number,
      trivia: response 
    }))
    .catch((error) => ({
      error,
      trivia: null
    }));
}
