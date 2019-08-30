export const getRecommendedHoursOfSleep = (data) => {

  let storage = {};
  data.forEach(item => {
    let md = [item.sleepdate[1], item.sleepdate[2]].join(' ');
    let year = [item.sleepdate[0]].toString();
    let time = [item.sleepdate[3], item.sleepdate[4]].join(':');
    let start = new Date(md + ', ' + year + ' ' + time);

    let md2 = [item.wakedate[1], item.wakedate[2]].join(' ');
    let year2 = [item.wakedate[0]].toString();
    let time2 = [item.wakedate[3], item.wakedate[4]].join(':');
    let finish = new Date(md2 + ', ' + year2 + ' ' + time2);

    let hours = getHours(start, finish);
    if (storage[hours]) {
      storage[hours].push(Math.round((item.sleepmood + item.wakemood + item.daymood) / 3));
    } else {
      storage[hours] = [Math.round((item.sleepmood + item.wakemood + item.daymood) / 3)];
    }
  })

  let max = [0, 0];
  for (let key in storage) {
    if (storage[key].length > 1) {
      let avg = storage[key].reduce((acc, val) => {return acc += val}, 0) / storage[key].length;
      console.log('AVG', avg, 'Hour', key)
      if (avg > max[0]) {
        max[0] = avg;
        max[1] = key;
      }
    }
  }
  return max[1]
}

export const getGraphData = (data, setStartDate, setEndDate, 
                             setLongestSleep, setShortestSleep, 
                             setAverageSleep, setAverageMood, setMonthArray) => {

  let hoursArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let obj = {};
  let userHours = [];
  let moods = [];
  let monthArr = [];

  let graphData = data.map((item, index) => {

    let md = [item.sleepdate[1], item.sleepdate[2]].join(' ');
    let year = [item.sleepdate[0]].toString();
    let time = [item.sleepdate[3], item.sleepdate[4]].join(':');
    let start = new Date(md + ', ' + year + ' ' + time);

    let md2 = [item.wakedate[1], item.wakedate[2]].join(' ');
    let year2 = [item.wakedate[0]].toString();
    let time2 = [item.wakedate[3], item.wakedate[4]].join(':');
    let finish = new Date(md2 + ', ' + year2 + ' ' + time2);

    monthArr.push(finish.getMonth() + 1);

    if (index === 0) {
      setStartDate((finish.getMonth() + 1) + '/' + finish.getDate());
    }

    if (index === data.length - 1) {
      setEndDate((finish.getMonth() + 1) + '/' + finish.getDate());
    }

    let hours = getHours(start, finish);
    userHours.push(hours);
    let moodAvr = (item.sleepmood + item.wakemood + item.daymood) / 3;
    moods.push(moodAvr);

    if (!obj[hours]) {
      obj[hours] = 0;
    } 
    return {x: item.wakedate[2], y: hours}
  })
  //collect months to display on xAxis before the date
  setMonthArray(monthArr);

  // hoursArr.forEach(num => {
  //   if (!obj[num]) {
  //     graphData.push({y: num})
  //   }
  // })

  let sortedUserHours = userHours.sort((a, b) => a - b);
  let avrSleep = Math.round(userHours.reduce((acc, val) => {return acc += val}, 0) / userHours.length);
  let avgWeekMood = Math.round(moods.reduce((acc, val) => {return acc += val}, 0) / moods.length);

  setLongestSleep(sortedUserHours[userHours.length - 1]);
  setShortestSleep(sortedUserHours[0]);
  setAverageSleep(avrSleep);
  setAverageMood(avgWeekMood);

  return graphData;
}

const getHours = (start, finish) => {
  let diff = (finish.getTime() - start.getTime()) / 1000;
  diff /= (60 * 60);
  if (diff > 12) {diff = 12}
  return Math.abs(Math.round(diff));
}

export {getHours};

export const makeDateFromArray = (arr) => {
  const newArr = [...arr];
  newArr[1]--;
  return new Date(...newArr);
}