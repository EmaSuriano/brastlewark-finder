import fetch from 'node-fetch';
import memoize from 'fast-memoize';

const BASE_URL =
  'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

const fetchGnomes = memoize(async () => {
  const rawData = await fetch(BASE_URL);
  const jsonData = await rawData.json();
  console.log('calling server');
  return jsonData.Brastlewark;
});

const getGnomes = async (_, args = {}) => {
  const gnomes = await fetchGnomes();
  const { name = '', professions = [] } = args;
  return gnomes.filter(
    gnome =>
      (!name || new RegExp(name, 'i').test(gnome.name)) &&
      (!professions.length ||
        professions.every(prof => gnome.professions.includes(prof))),
  );
};

const getGnomeById = async (_, { id }) => {
  const gnomes = await fetchGnomes();
  return gnomes.find(gnome => gnome.id == id);
};

export { getGnomes, getGnomeById };
