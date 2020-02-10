import {get} from './http'
export const test=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = '/test/list'
    return get(url,params)
}