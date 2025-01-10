import request from '@/utils/request'
const getPicCode = () => {
   return request.get("/captcha/image")
}
export { getPicCode }