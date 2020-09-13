import axios from 'axios';

const KEY = 'AIzaSyCax-WNfpGJLzrVdkX6UM3HW_f_aYH18Bc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

