import {get} from './http'
export const getImglist=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = 'api/carousel/list'
    return get(url,params)
}