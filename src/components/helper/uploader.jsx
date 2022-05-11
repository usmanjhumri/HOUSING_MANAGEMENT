import axios from "axios";


export const fileUploader = async (file, actorMongoID) => {
    const validName = file.name.replace(/[ ]/g, '_').split('.')[0];
    let blob = file.slice(0, file.size, 'image/png');
    let newFile = new File([blob], `${validName}${actorMongoID}.png`, { type: 'image/png' });
    let updatedData = new FormData();
    updatedData.append("upload_file", newFile);
    let Updater = await axios.post('/imageuploader', updatedData);
    return `/images/${Updater.data}`;
}
