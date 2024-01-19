
import './App.css'
import Card from './component/Card'

function App() {
  
  return (
    <>
      {/* <h1 className=" text-green-600 bg-gray-900 rounded-full cursor-pointer px-5 py-10">TailWind Test</h1> */}
      <div className="AllCard flex flex-wrap container gap-6 w-100 align-middle">
        <Card image="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India-1200x900.jpg" title="About Mac"/>
        <Card image="https://apollo.olx.in/v1/files/puehgk9bwxcj-IN/image;s=360x0" title="About Hp"/>
        <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFqkrvavWQ9Q9q9dirUEml2GCP34Wgie5_g&usqp=CAU" title="About lenovo"/>
        
      </div>




      
    </>
  )
}

export default App
