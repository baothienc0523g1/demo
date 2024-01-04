/** action mang theo giá trị: type, payload
 * - type bắt buộc phải có giá trị-nó là
 * - payload có thể để trống
 * action sẽ thể hiện cho reducer biết nó phải làm gì (type)
 * với dữ liệu (payload) gì*/


const doIncrease = (val) => {
    return {
        type: DO_INCREASE,
        payload: val,
    };
}

const doDecrease = (val) => {
    return {
        type: DO_DECREASE,
        payload: val,
    };
}

export {doIncrease, doDecrease}

const DO_INCREASE = "doIncrease";
const DO_DECREASE = "doDecrease";

export {DO_INCREASE, DO_DECREASE};