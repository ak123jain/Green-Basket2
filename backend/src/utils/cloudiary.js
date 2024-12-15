import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


 

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret:  process.env.CLOUD_API_SECRET // Click 'View API Keys' above to copy your API secret
    });



const uploadfileoncloudniary = async (localfilepath) =>{
    try {
        if (!localfilepath) {
            return null
        }

        const response = await cloudinary.uploader.upload(localfilepath , {
            resource_type :"auto"
        })

        console.log("file is uploaded on cloudniary" , response.url);
        

        // fs.unlinkSync(localfilepath)
        return response
        
    } catch (error) {
        fs.unlinkSync(localfilepath)
        return null
    }
}

export {  uploadfileoncloudniary  }