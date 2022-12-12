const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlights = () => {
  const dateDoday = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
  const actualUrl = `${baseUrl}/${dateDoday}`;

  return fetch(actualUrl).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    // throw new Error('Bad Fetch');
  });
};
