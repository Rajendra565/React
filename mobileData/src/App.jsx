import Data from './MobileData.json'
function App() {
 

  return (
    <>
    <div className="" style={{width:"95%",margin:"0 auto",display:"flex",gap:"20px",justifyContent:"center",flexWrap:"wrap"}}>
      {
        Data.map((val)=>{
         return (<div key={val.id} className="card" style={{display:"flex",flexDirection:"column",background:"#414141",padding:"20px",width:"30%",alignItems:"center",color:"#fff",gap:"10px"}}>
            <img src={val.image} alt="image" style={{width:"200px"}} />
            <span>{val.name}</span>
          </div>)
        })
      }
    </div>

    </>
  )
}

export default App
