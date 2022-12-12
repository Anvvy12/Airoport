const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlights = date => {
  if (!date) {
    date = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
  }
  const actualUrl = `${baseUrl}/${date}`;

  return fetch(actualUrl).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    throw new Error('Bad Fetch');
  });
};
