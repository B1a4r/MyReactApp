import './App.css';
import Liststu from './comps/test';
import Headerr from './comps/Headerr'
import Aside from './comps/aside';
import Post from './comps/post';
import FuncProps from './comps/newcomp';
import In from './comps/intag';
import Btn from './comps/tagbtn';
import { useState } from 'react';

const showcat = true;



function App() {
  const list = ['looking for a job','playing games','reading my book','cleaning my room','facetiming my mom','going to the gym'];
  const postss = [
    {
      id:1,
      post:'10',
      title:'it ends with us',
      desc:'best to ever exists'
    },
    {
      id:2,
      post:'99',
      title:'the end of the fucking world',
      desc:'highly recamanded serie'
    },
    {
      id:3,
      post:'02',
      title:'five feet apart',
      desc:'one of the sadest movies ever'
    },
  // <Post post='10' title='it ends with us' desc='best to ever exists'/>,
  // <Post post='99' title='the end of the fucking world' desc='highly recamanded serie'/>,
  // <Post post='02' title='five feet apart' desc='one of the sadest movies ever'/>,
];
  const fun = postss.map((posts)=>{
    return <Post key={posts.id} title={posts.title} post={posts.post} desc={posts.desc}/>
  } 
)
  
  // const art='la vie en rose';
  // const art2='makkayn la rose la walo';
  const [name,setName] = useState('BAKR') 
  function setvalue(){
    if(name == 'SAMAD'){
      setName('BAKR')
    }else{  
      return setName('SAMAD');
    } 
  }




  const [InpValue,SetInpValue] = useState('')
  function handelchange(e){
    return SetInpValue(e.target.value);
  }




  const [FormVal,SetFormVal] = useState({name:'',mail:'',txtE:'',ste:false})


  const handler = (e) => {
    SetFormVal({ ...FormVal, name: e.target.value });
  };

  const handler1 = (e) => {
    SetFormVal({ ...FormVal, mail: e.target.value });
  };

  const handler2 = (e)=>{
    SetFormVal({...FormVal,txtE:e.target.value})
  }

  const handler3 = (e)=>{
    SetFormVal({...FormVal,ste:e.target.checked})
  }

  // const SubBtn = () => {
  //   SetFormVal({ name: '', mail: '',txtE:'',ste:false }); // Optionally reset the form fields
  // };
  const [Life,SetLife] = useState({
    firstinp:'',
    secinp:'',
    score:20
  });

  function PlusBtn(){
    Life.score++;
  }

  function handler4 (e){
    SetLife({...Life,firstinp : e.target.value});
  }

  const handler5 = (e)=> SetLife({...Life,secinp:e.target.value});
  console.log(Life);

  const handelsub =(e)=>{
    e.preventDefault();
    console.log(Life);
  }

  

  return (
    <>
    
      {/* <FuncProps name='aboubakr' mail='ataouil90@gmail.com' age='21' article={art}><h1>hello world</h1></FuncProps>
      <FuncProps name='samad' mail='samad@gmail.com' age="20" article={art2}><div style={{background:'grey', color:'black'}}>
        <h1 style={{
          background:'brown',
          color:'teal'
        }}>life so short</h1>
        <p style={{color:'orange'}}>azrou is shit</p>
        </div></FuncProps>
      <FuncProps name='walid' mail='walid@gmail.com' age='19'><h1 style={{
        background:'black',
        color:'grey'
      }}>give me a kiss</h1></FuncProps> */}
      <Headerr/>
      <div style={{display:'flex'}}>
        <div style={{width:'55%'}}>
        {fun}
        <Post post={null} title={null} desc={null}>
    <ul>
    {list.map((li) =><li key={li} style={{color:'brown'}}>{li}</li>)}
    </ul>
  </Post>
  <Post post={null} title={null} desc={null}>
    <div style={{padding:'20px',background:'orange',color:'black',marginBottom:'10px',borderRadius:'10px',marginTop:'10px' }}>{name}</div>
    <button onClick={setvalue} style={{padding:'10px',marginBottom:'10px', background:'black' ,color:'white',border:'1px solid grey',borderRadius:'7px'} }>click</button>
  </Post>
  <Post post={null} title={null} desc={null}>
    <div style={{padding:'50px'}}>
    <label>NAME </label>
    <input value={InpValue} onChange={handelchange} />
    <p style={{border:'2px dashed black',padding:'20px',color:'grey',borderRadius:'7px'}}>{InpValue}</p>
    </div>
  </Post>
  <Post post={null} title={null} desc={null}>
      <>
        <form onSubmit={(e) => {e.preventDefault(); console.log(FormVal)}} style={{ padding: '30px' }}>
          <label>NAME </label>
          <input value={FormVal.name} onChange={handler} /><br />
          <label>MAIL </label>
          <input
            style={{ marginTop: '10px' }}
            value={FormVal.mail}
            onChange={handler1}
          /><br />
          <label>COMMENT</label>
          <textarea style={{ marginTop: '10px' }} value={FormVal.txtE} onChange={handler2}/><br/>
          <label>CHECK STATUS</label>
          <input type="checkbox" onChange={handler3} checked={FormVal.ste}/><br/>
          <button style={{marginLeft: '90px',marginTop: '20px',padding: '10px',marginBottom: '10px',background: 'black',color: 'white',border: '1px solid grey',borderRadius: '7px'}}
          >
            Send
          </button>
        </form>
      </>
    </Post>
    <Post post={null} title={null} desc={null}>
      <form onSubmit={handelsub} style={{padding:'50px'}}>
      <b style={{background: 'black',color: 'white',border: '1px solid grey',borderRadius: '7px',padding:'5px'}} value={Life.score}>{Life.score}</b><br/>
      <button onClick={PlusBtn} style={{marginTop:'10px'}}>+1</button><br/>
      <input type="text" value={Life.firstinp} style={{marginTop:'10px'}} onChange={handler4}/><br/>
      <input type="text" value={Life.secinp} style={{marginTop:'10px'}} onChange={handler5}/>
      </form>
    </Post>
        {/* <Post post={null } desc={null} title={null}><ul>
            {list.map((li) =><li key={li} style={{color:'brown'}}>{li}</li>)}
        </ul></Post> */}
        </div>
        <div style={{
          width:'25%',
          display:'flex',
          }}>
            <Showside/>
        </div>
      </div>
    </>
  );
}

function Showside(){
  if(showcat){
    return <Aside style={
      {
          borderRadius:'10px',
          padding:'40px',
          justifyContent:'center',
          flexDirection:'row',
          hight:'100px',
          width:'100px',
      }
  }>
  </Aside>
  }else{
    return <p style={{
      padding:'10px',
      background:'orange',
      borderRadius:'10px',
      border:'1px solid black',
      height:'40px'
    }}>naaah</p>
  }
}

export default App;
