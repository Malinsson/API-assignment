const key = '97b1d1a32c7021b4bfa47961f8635f86c825ebe1';

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

let group = 'birds';
let area = 'Asia';

getAudio(group, area);