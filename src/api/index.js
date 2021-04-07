
import ajax from './ajax'
export const reqAdreess = (geohash)=>ajax(`/position/${geohash}`)

export const reqFoodTypes = ()=>ajax(`/index_category`)


export const reqShops = (latitude,longitude)=>ajax(`/index_category`,{latitude,longitude})
