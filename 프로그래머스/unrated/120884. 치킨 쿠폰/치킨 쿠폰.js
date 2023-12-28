function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    
    while(coupon >= 10) {
        const usedCoupon = Math.floor(coupon/10);
        service = service + usedCoupon;
        coupon = coupon - usedCoupon * 10;
        coupon = coupon + usedCoupon;
    }
    return service;
}