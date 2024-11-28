import In from "./intag"

export default function Btn({title='NaN',price='NaN',picture='NaN',validation,children}){





    // const listing = listIn.map((L)=> <div key={L}>{L}</div>);
    return(
        <>
            
            <button style={{padding:'70px',width:'60px' ,borderRadius:'10px',color:'black',display:'flex',justifyContent:'center',flexDirection:'column'}}>
            {children}
            {picture}<br/>
            {title}<br/>
            {price}<br/>
            {validation}
            {/* {listing} */}
            </button>        
        </>
    )
}
