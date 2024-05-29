function solution(price, money, count) {
    let totalPrice = 0;
    // 놀이기구 N번 째 이용 시, price = price * N
    totalPrice = priceSum(price,count);
    // 금액이 부족하지 않으면 0 return
    if (totalPrice<=money) return 0;
    // 놀이기구 count번 이용 시, 자신이 가지고 있는 금액에서 얼마가 모자라는지 return
    else {
        return totalPrice-money;
    }
    
}

function priceSum(price,count){
    return price*count*(1+count)/2;
}