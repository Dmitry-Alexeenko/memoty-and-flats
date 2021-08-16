export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export const buildTime = (ms: number = 0) => {
  if (ms > 0) {
    const timeLeft = {
      days: Math.floor(ms / (1000 * 60 * 60 * 24)),
      hours: Math.floor((ms / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((ms / 1000 / 60) % 60),
      seconds: Math.floor((ms / 1000) % 60)
    };

    let timeLeftString = ''
    if (timeLeft.days > 0) {
      timeLeftString = `${timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}:`
    }
    if (timeLeft.hours > 0) {
      timeLeftString = `${timeLeftString}${timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}:`
    }
    if (timeLeft.minutes > 0) {
      timeLeftString = `${timeLeftString}${timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:`
    } else {
      timeLeftString = `${timeLeftString}00:`
    }
    if (timeLeft.seconds > 0) {
      timeLeftString = `${timeLeftString}${timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}`
    } else {
      timeLeftString = `${timeLeftString}00`
    }

    return timeLeftString
  }

  return '00:00'
}