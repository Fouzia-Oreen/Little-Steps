import dotenv from 'dotenv'
dotenv.config()
import {v2 as cloudinary} from "cloudinary"
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
})
export const uploadMediaToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
                resource_type: 'auto'
        })
        return result
    } catch (error) {
        console.log(error)
        throw new Error("Error uploading to cloudinary");   
    }
}

export const deleteMediaToCloudinary = async (publicId) => {
    try {
       await cloudinary.uploader.destroy(filePath)
        return result
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete file from cloudinary");   
    }
}
