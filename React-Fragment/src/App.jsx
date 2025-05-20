
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  let fooditems=["Black beans","carrots","Walnuts","Bananas","Apple","Mango","Peas","Patatoes","Avocado","Coconut"]


  return (
    // this is fragment<></>⬇️
   <>
   <div className=" w-75 container">
    <h1 className=' text-center text-capitalize'>healthy food items </h1>
    <ul className="list-group">
    {fooditems.map((val)=>{
      return <li key={val} className="list-group-item ">{val}</li>
    })}
</ul>
</div> 
   </>
  )
}

export default App
