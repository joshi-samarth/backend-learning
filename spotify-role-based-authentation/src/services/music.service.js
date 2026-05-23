const ImageKit = require("@imagekit/nodejs");

const imagekitinstance = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadfile(file) {
    const result = await imagekitinstance.files.upload({
        file,
        fileName: "music_"+Date.now(),
        folder: "spotify"
    })

    return result;
}

module.exports = { uploadfile };