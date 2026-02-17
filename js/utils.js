export function dataCount(displayer, dataToCount) {
  if(!displayer) return
  displayer.textContent = dataToCount.length;
}

