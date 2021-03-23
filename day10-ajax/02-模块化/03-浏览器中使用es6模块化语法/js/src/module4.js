// es6模块化中要注意的问题:
// 1.  默认导出,分别导出,统一导出,可以存在在一个模块中
export const num = 1
const str1 = 'zzzzz'
export { str1 }
export default { age: 1 }
