function solution(score) {
    
    function average(el) {
        return (el[0] + el[1])/2
    }

    
    const newArr = score.map((v)=>average(v))
    console.log(newArr)
    const myArr = newArr.slice().sort((a,b)=>b-a);
    console.log(myArr)
    return newArr.map((v)=>{
        return myArr.indexOf(v)+1
    })
}