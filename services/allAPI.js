import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

//upload video API

export const uploadvideoAPI = async(video)=>{
    return await commonAPI("post",`${server_url}/allvideo`,video)
}

//getAllUpload video API


export const getAllvideosAPI = async()=>{      
    return await commonAPI("GET",`${server_url}/allvideo`,"")
}


//getAvideo API

export const getAvideoAPI = async(id)=>{
    return await commonAPI("GET",`${server_url}/allvideo/${id}`,"")
}


//delete videoAPI

export const deletevideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allvideo/${id}`,{})
}


//add video History

export const addvideoHistoryAPI = async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}



//getvideoHistory

export const getvideoHistoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// deletevideo history

export const deletevideoHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}



//add Category api

export const addcategoryAPI = async(category)=>{
    return await commonAPI("POST",`${server_url}/catogery`,category)
}



//get category  

export const getcategoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/catogery`,"")
}



//delete category

export const deletecategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/catogery/${id}`,{})
}



// update Category 

export const updateCategoryAPI = async (id,categoryDetails) => {
    return await commonAPI("PUT",`${server_url}/catogery/${id}`,categoryDetails)
}
