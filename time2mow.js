function time2mow(width, length, mowRate){
    let mowTime = (width * length) / mowRate
    return mowTime;
 }
 
 export {time2mow}