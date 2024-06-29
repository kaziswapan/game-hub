import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '47548b25e6b744cc96c6afa448f99bf4'
    }
})