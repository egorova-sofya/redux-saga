import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getNews, setLatestNews} from "./redux/actions/actionCreator";
import {useEffect} from "react";
import News from "./components/News";


function App() {
    const store = useSelector(store => store)
    const dispatch = useDispatch()



    return (
    <div className="App">
        <h1>redux-saga</h1>
        <button type='button' onClick={() => {
            dispatch(getNews())
        }}>Get news</button>
        <News news={store?.newsReducer?.latestNews} title="Latest News" />
        <News news={store?.newsReducer?.popularNews} title="Popular News" />

    </div>
  );
}

export default App;
