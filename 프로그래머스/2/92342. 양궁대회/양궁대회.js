function solution(n, info) {
  let maxDiff = 0;
  let answer = [-1];

  function dfs(idx, remain, rionInfo) {
    if (idx === 11) {
      if (remain > 0) rionInfo[10] += remain; // 남은 화살은 0점에 몰빵

      let rionScore = 0;
      let apeachScore = 0;

      for (let i = 0; i <= 10; i++) {
        if (info[i] === 0 && rionInfo[i] === 0) continue;
        if (rionInfo[i] > info[i]) rionScore += 10 - i;
        else apeachScore += 10 - i;
      }

      let diff = rionScore - apeachScore;
      if (diff > 0 && diff >= maxDiff) {
        if (diff > maxDiff) {
          answer = [...rionInfo];
          maxDiff = diff;
        } else {
          // 점수차가 같으면 낮은 점수 더 많이 맞힌 경우 선택
          for (let i = 10; i >= 0; i--) {
            if (rionInfo[i] > answer[i]) {
              answer = [...rionInfo];
              break;
            } else if (rionInfo[i] < answer[i]) break;
          }
        }
      }

      if (remain > 0) rionInfo[10] -= remain; // 원상 복구
      return;
    }

    // 1) 이 점수를 가져간다
    if (remain > info[idx]) {
      rionInfo[idx] = info[idx] + 1;
      dfs(idx + 1, remain - rionInfo[idx], rionInfo);
      rionInfo[idx] = 0; // 백트래킹
    }

    // 2) 이 점수 안 가져간다
    dfs(idx + 1, remain, rionInfo);
  }

  dfs(0, n, Array(11).fill(0));
  return answer;
}
