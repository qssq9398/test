import { getInfo, setInfo } from '@/utils/storage'

export default {
   namespaced: true,
   state() {
      return {
         userInfo: getInfo()
      }
   },
   mutations: {
      setUserInfo (state, obj) {
         state.userInfo = obj
         // 进行localStorage(本地存储)
         setInfo(obj)
      }
   },
   actions: {

   },
   getters: {

   }
}