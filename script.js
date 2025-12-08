const key = '97b1d1a32c7021b4bfa47961f8635f86c825ebe1';

const submit = document.querySelector('#submit');
const audioElement = document.querySelector('audio');
const genName = document.querySelector('#name');
const scientificName = document.querySelector('#scientific');

const getAudio = async (group, area) => {
  try {
    const url = `https://xeno-canto.org/api/3/recordings?query=q:">B"+area:${area}+grp:${group}&key=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error)
  }
};
submit.addEventListener('click', function() {
    let group = document.querySelector('#group').value;
    let area = document.querySelector('#area').value;
    getAudio(group, area);
});