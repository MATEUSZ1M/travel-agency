
// TO DO!
export const formatTime = (totalSeconds) => {
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  // number to string
  const stringS = seconds.toString();
  const stringM = minutes.toString();
  const stringH = hours.toString();
  //format time
  seconds = stringS.padStart(2, '0');
  minutes = stringM.padStart(2, '0');
  hours = stringH.padStart(2, '0');
  //rendered time
  let formattedTime = `${hours}:${minutes}:${seconds}`;
  
  return formattedTime ;
  
};


