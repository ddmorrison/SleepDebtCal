const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 9;

    case "tuesday":
      return 10;

    case "wednesday":
      return 9;

    case "thursday":
      return 10;

    case "friday":
      return 8;

    case "saturday":
      return 7;

    case "sunday":
      return 5;
  }
};
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};
const getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 7;
};
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(
      "Your sleep difference is " +
        (idealSleepHours - actualSleepHours) +
        " hours. You've got a perfect nights rest."
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "Your sleep difference is " +
        (idealSleepHours - actualSleepHours) +
        " hours. More sleep than necessary."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "Your sleep  difference is " +
        (idealSleepHours - actualSleepHours) +
        " hours. You need to get more rest."
    );
  } else {
    console.log("Error!");
  }
};
calculateSleepDebt();
