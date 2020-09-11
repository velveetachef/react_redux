import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6nGtzD5SD6YIhr4VqLTCq-nus0geHGaxJ2DBAxH0bZ4'
    }
});
