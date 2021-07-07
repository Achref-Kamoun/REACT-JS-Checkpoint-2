import './App.css';
import img from './image/img2.jpg'
import mov from './image/mov_bbb.mp4'
function App() {
  return (
    <div>
   <div className='divclass'>
      <h1 className="title">Achref Kamoun</h1><br/>
      <img src={img} alt=""/>
       <br/>
      <img src="/img1.jpg" alt="" />
    </div>
    
    <video width="320" height="240" controls>
    <source src={mov} type='video.mp4' />
   </video>
   </div>
  );
}

export default App;
