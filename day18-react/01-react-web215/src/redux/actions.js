import { SAVE_DATA } from './constants'

// 定义返回action对象的函数
function saveData(data) {
  return { type: SAVE_DATA, data }
}

export { saveData }
