// 注意: 导入这个文件,可能会在多个文件中导入. 但是这个context.js中的代码只执行一次
import React from 'react'
// 创建context时候的默认值是在不写provider的时候生效
const context = React.createContext('一块钱')
export default context
