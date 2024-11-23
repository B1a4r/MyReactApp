import Btn from './tagbtn'


export default function Aside(){

    const img = <img style={{width:'90px',height:'60px',borderRadius:'10px'}} src='https://imgs.search.brave.com/PLlASHvYyZvLS1e91epQgONHcHOhOvCDdmLRk3jFEk8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/NDY0MzMxL3Bob3Rv/L3RyZWUtYW5kLXJv/b3QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUNXRlZsOWg4/cVVoZ0xEY3EtYkFD/enJQOFJ4dE1oMUQ3/MU91ZEpsX3o5OVE9'/>
    const img1 = <img style={{width:'90px',height:'60px',borderRadius:'10px'}} src="https://imgs.search.brave.com/tFe9_96qZpWBmkC8F7ptrld-ex6jBgTpG2e7sJB19nY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUy/OTU5MDUxL3ZlY3Rv/ci9odW1hbi1oZWFy/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bFd0WnVqYmVY/NE9BcGI2YjFzNXFj/X2QtV1ptNlBkRTdu/VW9zQ0FjLVE3bz0"/>
    const img2 = <img style={{width:'90px',height:'60px',borderRadius:'10px'}} src='https://imgs.search.brave.com/heydqty4Evff6LZnysqWCBHmZtOMByBBLUjHR_Rh83I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFWeTlDZGVUakwu/anBn'/>
    const varbtn = <button style={{borderRadius:'5px',background:'black',color:'white',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'5px'}}>buy</button>;
    const listA = [
        {
            id:1,
            title:'heart',
            price:'1.5M$',
            picture:(img),
            validation:(varbtn),
        },
        {
            id:2,
            title:'tree',
            price:'35$',
            picture:(img1),
            validation:(varbtn)
        },
        {
            id:3,
            title:'timberland',
            price:'330$',
            picture:(img2),
            validation:(varbtn)
        }
    //     <Btn title='heart' price='100000000$' picture={img1} validation={<button style={{
    //         borderRadius:'5px',
    //         background:'black',
    //         color:'white',
    //         display:'flex',
    //         justifyContent:'center',
    //         alignItems:'center',
    //         marginLeft:'5px'
    //     }}>buy</button>}/>,
    // <Btn title='tree' price='35$' picture={img} validation={<button style={{
    //     borderRadius:'5px',
    //     background:'black',
    //     color:'white',
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     marginLeft:'8px'
    // }}>buy</button>}/>,
    // <Btn title='timberland' price='330$' picture={img2} validation={<button style={{
    //     borderRadius:'5px',
    //     background:'black',
    //     color:'white',
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     marginLeft:'8px'
    // }}>buy</button>}/>
]
    const maping = listA.map((M)=>{return <Btn key={M.id} title={M.title} price={M.price} picture={M.picture} validation={M.validation}/>});

    return(
        <>
        <aside className={'aside'}>
            {maping}
        </aside>

        </>
        
    )
}