import {useSelector} from "react-redux";
import {myStore} from "../redux/store";


/**
 * Sử dụng useSelector của React hoặc sử dụng getState từ redux để
 * lấy state hiện tại từ store */
function Header() {
    const balance = useSelector(state => state.reducer.balance);

    return (
        <div>
            <h1>Account balance (state): {balance} $</h1>
        </div>
    )
}

export default Header;