import React from 'react'

export function App(){
    const [count, setCount] = React.useState(0)
    return ( 
        <>  
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>+1</button> 
            {/* <span>{count}</span> 
            <button onClick={setCount(count + 1)}>+1</button> */}
        </>
    )
}