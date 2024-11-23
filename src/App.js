import './App.css';
import Liststu from './comps/test';
import Headerr from './comps/Headerr'
import Aside from './comps/aside';
import Post from './comps/post';
import FuncProps from './comps/newcomp';
import In from './comps/intag';
import Btn from './comps/tagbtn';

const showcat = true;



function App() {
  const list = ['looking for a job','playing games','reading my book','cleaning my room','facetiming my mom'];
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
    }
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
