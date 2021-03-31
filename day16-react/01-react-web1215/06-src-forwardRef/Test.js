// import React, { Component } from 'react'

// export default class Test extends Component {
//   render() {
//     return (
//       <div>
//         {/* 如果ref属性写在一个jsx标签上,那么对应的ref对象的current指向的就是这个jsx标签的dom对象 */}
//         <input type="text" />
//       </div>
//     )
//   }
// }

import React from 'react'

// export default function Test() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

// 利用React.forwardRef的写法:

const Test = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default Test
