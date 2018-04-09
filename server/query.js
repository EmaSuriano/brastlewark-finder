import fetch from 'node-fetch';
import memoize from 'fast-memoize';

const BASE_URL =
  'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

const fetchGnomes = async () => {
  const rawData = await fetch(BASE_URL);
  const jsonData = await rawData.json();
  console.log('calling server');
  return jsonData.Brastlewark;
};

const getGnomes = memoize(fetchGnomes);

const getGnomeById = async (_, { id }) => {
  const gnomes = await getGnomes();
  return gnomes.find(gnome => gnome.id == id);
};

export { getGnomes, getGnomeById };
