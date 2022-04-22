
import {takeEvery, put, call, fork, all, race, spawn} from '@redux-saga/core/effects'
import {GET_NEWS, SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR} from "../constans";
import {getLatestNews, getPopularNews} from "../../api";
import {setLatestNews, setPopularNews} from "../actions/actionCreator";

export function* handleLatestNewsWorker() {
    try {
        // throw new Error()
        const {hits} = yield call(getLatestNews)
        yield put(setLatestNews(hits))
    }catch  {
        console.log('errrr')
        yield put({type: SET_LATEST_NEWS_ERROR, payload: 'i am LATEST_NEWS_ERROR' })
    }

}

export function* handlePopularNewsWorker() {

    try {
        // throw new Error()
        const {hits} = yield call(getPopularNews)
        yield put(setPopularNews(hits))
    }catch  {
        yield put({type: SET_POPULAR_NEWS_ERROR, payload: 'i am POPULAR_NEWS_ERROR' })
    }



}

export function* handleNewsWorker() {
 yield fork(handleLatestNewsWorker)
 yield fork(handlePopularNewsWorker)
}

export  function* watcherSaga() {
    yield takeEvery(GET_NEWS, handleNewsWorker)
}

export default  function* rootSaga() {
    yield watcherSaga()
}