const URL = 'https://api.iev.aero/api/flights/11-01-2022';

export const fetchFlights = () => {
  return fetch(URL).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    throw new Error('Bad Fetch');
  });
};
