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

    const randomIndex = Math.floor(Math.random() * data.recordings.length);
    audioElement.src = data.recordings[randomIndex].file;
    genName.textContent = data.recordings[randomIndex].en;
    scientificName.textContent = data.recordings[randomIndex].gen + ' ' + data.recordings[randomIndex].sp;

  } catch (error) {
    console.log(error)
  }
};


submit.addEventListener('click', function(event) {
    event.preventDefault;
    let group = document.querySelector('#group').value;
    let area = document.querySelector('#area').value;
    getAudio(group, area);
});