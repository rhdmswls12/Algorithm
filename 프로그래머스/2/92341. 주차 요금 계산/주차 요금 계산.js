function solution(fees, records) {
    const answer = [];
    const inTime = {};
    const totalTime = {};
    
    for (const record of records) {
        const [time, car, type] = record.split(" ");
        const minute = toMinutes(time);
        
        if (type === "IN") {
            inTime[car] = minute;
        } else {
            const parked = minute - inTime[car];
            totalTime[car] = (totalTime[car] || 0) + parked;
            delete inTime[car];
        }
    }
    const endTime = toMinutes("23:59");
    
    for (const car in inTime) {
        const parked = endTime - inTime[car];
        totalTime[car] = (totalTime[car] || 0) + parked;
    }
    
    const cars = Object.keys(totalTime).sort();
    
    for (const car of cars) {
        const parkedTime = totalTime[car];
        const fee = calcFee(parkedTime, fees);
        answer.push(fee);
    }
    
    return answer;
}

function toMinutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
}

function calcFee(time, fees) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    
    if (time <= baseTime) return baseFee;
    
    return (baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee)
}