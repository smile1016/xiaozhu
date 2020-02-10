import axios from 'axios'
//ajax的get数据请求
export const get = (url,params)=> {
    return axios.get(url,{params})
}
//ajax的post数据请求
export const post = (url,params)=> {
    return axios.post(url,{...params})
}