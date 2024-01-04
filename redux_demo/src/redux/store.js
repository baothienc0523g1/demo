import {createStore} from "redux";
import {rootReducer} from "./reducer";
/**store là nơi lưu trữ state chung của ứng dụng
 * nó là 1 object bất biến và chỉ nên có 1 store duy nhất trong
 * toàn ứng dụng. Dưới đây là khởi tạo store thông qua redux
 * Sau đó, store sẽ được gọi ở cấp cao nhất của ứng dụng như App.js hoặc index.js
 * Ở Demo này ta gọi ở index.js thông qua cặp thẻ <Provider>
 * Hàm này nhận vào 1 tham số chính là rootReducer*/

const myStore = createStore(rootReducer);

export {myStore}

