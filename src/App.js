import logo from './logo.svg';
import './App.css';
import RandomColor from './components/randam colors';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/QR-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import ModalTest from './components/custom-model-pop/modal-test';
import Model from './components/custom-model-pop/modal';
import Modal from './components/custom-model-pop/modal';
import GitHubProfileFinder from './components/github-profile-finder';
import SearchAutoComplete from './components/search-autoComplete';
function App() {
  return (
    <div className="App">
    {/* <RandomColor /> */}
    {/* <StarRating noOfStars={10}/> */}
    {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={'10'}/> */}
    {/* <LoadMoreData/> */}
    {/* <TreeView menus={menus} /> */}
    {/* <QRCodeGenerator/> */}
    {/* <LightDarkMode/> */}
    {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
    {/* <ModalTest/> */}
    {/* <GitHubProfileFinder/> */}
   <SearchAutoComplete/>
    </div>
  );
}

export default App;
