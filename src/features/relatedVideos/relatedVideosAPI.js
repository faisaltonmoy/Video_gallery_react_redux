import axiosInstance from "../../utils/axios"

export const getRelatedVideos = async ({tags, id}) => {

    const limit = 5;
    let query = tags?.length > 0 ? tags.map((tag) => 
    `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` 
    : `id_ne=${id}&_limit=${limit}` ;

    const response = await axiosInstance.get(`/videos?${query}`);

    return response.data;
};