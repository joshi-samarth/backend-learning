const { ImageKit } = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE
})

async function UploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: "profile picture.jpeg"
    })

    return result;
}

module.exports = UploadFile;
