    function solution(hp) {
      var answer = 0;

      const cptAntCount = (hp - (hp % 5)) / 5 ;
        console.log(cptAntCount)
      answer += cptAntCount;
      let remainHp = hp - cptAntCount * 5 ;

      const soldierAntCount = (remainHp - (remainHp % 3)) / 3 ;
        console.log(soldierAntCount)
      answer += soldierAntCount;
      remainHp = remainHp - soldierAntCount * 3 ;

      const workerAntCount = remainHp
      console.log(workerAntCount)
      answer += workerAntCount;
      remainHp = remainHp - workerAntCount;

      return answer 
    }