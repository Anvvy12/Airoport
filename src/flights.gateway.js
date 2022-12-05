const URL = 'https://api.iev.aero/api/flights/11-01-2022';

export const fetchFlights = () => fetch(URL).then(responce => responce.json());
