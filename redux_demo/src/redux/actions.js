/** action mang theo giá trị: type, payload
 * - type bắt buộc phải có giá trị-nó là
 * - payload có thể để trống
 * action sẽ thể hiện cho reducer biết nó phải làm gì (type)
 * với dữ liệu (payload) gì*/


const doIncrease = () => {
    return {
        type: DO_INCREASE,
        payload: 1,
    };
}

const doDecrease = () => {
    return {
        type: DO_DECREASE,
        payload: 1,
    };
}

export {doIncrease, doDecrease}

const DO_INCREASE = "doIncrease";
const DO_DECREASE = "doDecrease";

export {DO_INCREASE, DO_DECREASE};