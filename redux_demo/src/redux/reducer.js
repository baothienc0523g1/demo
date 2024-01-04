import {combineReducers} from "redux";
import {DO_DECREASE, DO_INCREASE} from "./actions";
/**reducer là function làm nhiệm vụ khởi tạo
 * và quản lý các logic/tính toán.
 * Function trong reducer sẽ nhận các state
 * trước đó và action để tính toán state tiếp
 * theo và trả về state mới.
 * Reducer chỉ tính toán và xử lý thông qua nguyên tắc:
 * - Chỉ được thay đổi state khi có action và state cũ
 * - Không thay đổi state hiện tại mà copy state cũ sau đó thay đổi giá trị được copy
 * - Không xử lý bất đồng bộ, các side effect. Những công việc này được xử lý thông qua Middleware
 * */

/*Khởi tạo giá trị ban đầu cho state*/

const initState = {
    balance: 0,
};

/*Khởi tạo các reducer làm nhiệm vụ tương tác với state
*/
const reducer = (state = initState, action) => {

    switch (action.type) {
        case DO_INCREASE:
            return {
                ...state,
                balance: state.balance + action.payload
            }
        case DO_DECREASE:
            return {
                ...state,
                balance: state.balance - action.payload
            }
        default:
            return state;
    }
}

/**Hàm rootReducer có tác dụng gom nhiều reducer lại thành 1 đối tượng để dễ quản lý*/
export const rootReducer = combineReducers({
    reducer,
})