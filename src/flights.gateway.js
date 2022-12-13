const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlights = date => {
  if (!date) {
    // date = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
    date = '11-01-2021';
  }

  return fetch(`${baseUrl}/${date}`).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    throw new Error('Bad Fetch');
  });
};
