export function getNumberTrivia(number) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://numbersapi.com/${number}?trivia`
  )
    .then((response) => response.text())
    .then((response) => {
      const timeout = number === 6 ? 3000 : 0;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            number,
            trivia: response
          });
        }, timeout);
      });
    })
    .catch((error) => ({
      error,
      trivia: null
    }));
}
