import musicModel from '../models/music.model.js'
import jwt, { decode } from 'jsonwebtoken'
import uploadFile from '../services/storage.service.js'
import albumModel from '../models/album.model.js'


const createMusic = async (req, res) => {
   
        const { title } = req.body
        const file = req.file

        const result = await uploadFile(file.buffer.toString('base64'))

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id
        })

        res.status(201).json({
            message: "Music created successfully",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist
            }
        })
  
}


const createAlbum = async(req,res)=>{


    const {title, musics} = req.body;

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        musics
    })
    res.status(201).json({
        message:"Album created",
        album:{
            id:album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }
    
    })

}

const getAllMusics = async(req,res)=>{
    const musics = await musicModel.find().populate("artist", "username email")    // when we populate then instead of showing only id it shows the complete detail of the artist. It can be possible bcz we have used ref in the model(schema). If we not pass 2nd params then it will show all the details

    res.status(200).json({
        message:"Musics fetched successfully",
        musics: musics
    })
}


export default { createMusic, createAlbum ,getAllMusics}
