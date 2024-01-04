import {useDispatch, useSelector} from "react-redux";
import {doDecrease, doIncrease} from "../redux/actions";
import {useState} from "react";

function BodyPage() {
    const [val, setVal] = useState(0);
    const dispatch = useDispatch();

    const increase = () => {
        dispatch(doIncrease(val));
    }

    const decrease = () => {
        dispatch(doDecrease(val));
    }

    const changeVal = (event) => {
        setVal(event.target.value);
    }

    return (
        <>
            <input type="Enter a number..." onChange={event => changeVal(event)}/>
            <button onClick={decrease} className="btn btn-outline-primary">Minus</button>
            <button onClick={increase} className="btn btn-outline-primary">Additional</button>
        </>
    )
}

export default BodyPage;