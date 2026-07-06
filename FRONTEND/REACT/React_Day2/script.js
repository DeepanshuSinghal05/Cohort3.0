import React from 'react'

let root = document.querySelector('#root')

let h1 = React.createElement('h1',{},'Hello I am React')

ReactDOM.createRoot(root).render(h1)