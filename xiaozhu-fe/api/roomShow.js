import {get} from './http'
export const getRoomShowList=(params)=>{
    // let url = 'api/app/xzfk/html5/500/global/HotRecommend?'
    let url = 'api/roomshow/roomlist'
    return get(url,params)
}