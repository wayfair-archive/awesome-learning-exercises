export function getNumberTrivia(number) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://numbersapi.com/${number}?trivia`
  )
    .then((response) => response.text())
    .then((response) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            number,
            trivia: response
          });
        }, 2500);
      });
    })
    .catch((error) => ({
      error,
      trivia: null
    }));
}
