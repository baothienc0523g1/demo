import {myStore} from "../redux/store";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {doDecrease, doIncrease} from "../redux/actions";

function MainPage() {
    const balance = useSelector(state => state.reducer.balance);
    // const balance = myStore.getState().reducer.balance;

    const dispatch = useDispatch();
    const increase = () => {
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
                <h1>Balance (state): {balance}</h1>
            </div>
            <button onClick={decrease} className="btn btn-outline-primary">Decrease by 1</button>
            <button onClick={increase} className="btn btn-outline-primary">Increase by 1</button>
        </>
    )
}

export default MainPage;