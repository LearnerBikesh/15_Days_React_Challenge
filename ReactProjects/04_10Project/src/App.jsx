import "./App.css";
import Accordian from "./Components/Accordian/accordian";
import GenerateColor from "./Components/RandomColorGenerator/generateColor";
import StarRating from "./Components/StarRating/starRating";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
function App() {
  return (
    <>
    
    {/* <Accordian/> */}
    {/* <GenerateColor/> */}
    {/* <StarRating/> */}
    <ImageSlider URL = {'https://picsum.photos/v2/list'}  page ={1} limit = {10} />
    
    </>
  )
}

export default App;
