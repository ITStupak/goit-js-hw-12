import axios from "axios";

export async function getImages(userData) {
    try {
        const searchParams = new URLSearchParams({
            key: '44328072-f56b95eb73841ff5e619bc345',
            q: userData,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: '20',
            safesearch: false,
        });

        const url = `https://pixabay.com/api/?${searchParams}`;
    
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.error(err);
    }
}