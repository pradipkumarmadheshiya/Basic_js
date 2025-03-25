let nums=[80, 15, 30, 60, 63, 95, 95, 45, 75]

function codingScoreCheck(arr, cutOff){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            let total=arr.reduce((sum, cur)=>{
                return sum+cur
            },0)
    
            const cavg=total/arr.length
            if (cavg>=cutOff){
                resolve(`Coding average score: ${cavg}`)
            }
            else{
                reject(`Sorry you haven’t cleared the coding round. Your average is ${cavg}`)
            }
        },2000)
    })
}

function hukumuScoreCheck(arr, cutOff){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const total=arr.reduce((sum,cur)=>sum+cur,0)
            const havg=total/arr.length
            
            if (havg>=cutOff){
                resolve(`Your average hukumu score is: ${havg}`)
            }
            else{
                reject(`Sorry you haven’t cleared the HUKUMU round. your score is ${havg}`)
            }
        },2000)
    })
}

function unitMovementCheck(avgCodingScore, avgHukumuScore, cutOff){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const uavg=avgCodingScore+avgHukumuScore/2
            if (uavg>=cutOff){
                resolve(`clear ${uavg}`)
            }
            else{
                reject(`Sorry you haven’t cleared the final cutoff. ${uavg}`)
            }
        })
    },2000)
}



codingScoreCheck(nums, 60)
    .then((codingResult)=>{
        console.log(codingResult)
        const codingAverage = parseFloat(codingResult.split(": ")[1]);
        return hukumuScoreCheck([24,54,98,9,87,76],70)

            .then((hukumuResult)=>{
                console.log(hukumuResult)
                const hukumuAverage = parseFloat(hukumuResult.split(": ")[1]);
                return unitMovementCheck(codingAverage, hukumuAverage, 50)
            })
    })
    
    .then((fresult)=>{
        console.log(fresult)
    })
    .catch((error)=>{
        console.log(`err: ${error}`)
    })