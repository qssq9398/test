const INFO_KEY = 'hm_shopping_info'

const getInfo = () => {
   const result = localStorage.getItem(INFO_KEY)
   return result ? JSON.parse(result) : { token: '', userId: ''}
}

const setInfo = (obj) => {
   localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

const removeInfo = () => {
   localStorage.removeItem(INFO_KEY)
}

export { getInfo, setInfo, removeInfo }