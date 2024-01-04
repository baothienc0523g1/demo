import {myStore} from "../redux/store";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {doDecrease, doIncrease} from "../redux/actions";

/**
 * Sử dụng useSelector của React hoặc sử dụng getState từ redux để
 * lấy state hiện tại từ store, nên dùng getState. */

function MainPage() {
    const balance = useSelector(state => state.reducer.balance);
    // const balance = myStore.getState().reducer.balance;

    const state = myStore.getState();

    const dispatch = useDispatch();

    const increase = () => {
        console.log(state);
        dispatch(doIncrease());
    }

    const decrease = () => {
        dispatch(doDecrease());
    }

    useEffect(() => {

    }, [balance]);
    return (
        <>
            <div className="container">
                <h1>Balance (state): {balance} $</h1>
            </div>
            <button onClick={decrease} className="btn btn-outline-primary">Decrease by 1</button>
            <button onClick={increase} className="btn btn-outline-primary">Increase by 1</button>
        </>
    )
}

export default MainPage;