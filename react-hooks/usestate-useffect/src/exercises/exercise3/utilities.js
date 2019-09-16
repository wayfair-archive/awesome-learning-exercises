export function getMemeTemplates() {
  return fetch(
    'https://memegen.link/api/templates'
  ).then((response) => response.json());
}

export function getMemeInformation(
  memeTemplateLink
) {
  return fetch(memeTemplateLink).then(
    (response) => response.json()
  );
}
