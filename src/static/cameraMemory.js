import uuidv4 from "uuid";

const cameraMemory = [
  {
    uuid: "empty",
    photoInfo: {
      img:
        "https://ak4.picdn.net/shutterstock/videos/7905244/thumb/11.jpg"
    }
  }
];

function currentDate() {
  const now = new Date();
  return now.toLocaleDateString();
}


function currentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

export function saveToCamera(img) {
  cameraMemory.push({
    uuid: uuidv4(),
    date: currentDate(),
    time: currentTime(),
    photoInfo: { img }
  });
}

export function getLastPhoto() {
  const lastphoto = cameraMemory[cameraMemory.length-1];
  return lastphoto;
}

export function getAllPhotos() {
  return cameraMemory;
}

export function getPhotoById(id) {
  const photo = cameraMemory.find(a => a.uuid === id);
  return photo;
}


export function deletePhotoById(id) {
const photo = cameraMemory.find(a=> a.uuid===id);
const index = cameraMemory.indexOf(photo);
cameraMemory.splice(index,1);
return cameraMemory;
}