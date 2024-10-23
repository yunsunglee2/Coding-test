function solution(price, money, count) {
    let totalCost = 0;
    const initialCost = price;
    
    for(let i = 1; i <= count; i++) {
        totalCost = totalCost + price;
        price = initialCost*(i+1);
    }
    
    if(totalCost > money) {
        return totalCost - money;
    }
    
    return 0;
}