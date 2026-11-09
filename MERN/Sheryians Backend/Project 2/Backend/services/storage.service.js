import { ImageKit } from "@imagekit/nodejs/client.js";
import 'dotenv/config'

const ImageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(file){
    const result = await ImageKitClient.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder:"Backend/music"
    })
    return result
}

export default uploadFile