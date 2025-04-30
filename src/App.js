import logo from './logo.svg';
import './App.css';
import RandomColor from './components';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
    {/* <RandomColor /> */}
    <StarRating noOfStars={10}/>
    {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/> */}
    </div>
  );
}

export default App;
