import axios from 'axios';

const getAnime = async (options) => {
    try {
        const { data } = await axios.request(options);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default getAnime;
