interface DayOfChristmas {
  day: string;
  link: string;
}

const daysOfChristmas: DayOfChristmas[] = [
  { day: "first", link: "" },
  { day: "second", link: "" },
  { day: "third", link: "" },
  { day: "fourth", link: "" },
  { day: "fifth", link: "" },
  { day: "sixth", link: "" },
  { day: "seventh", link: "" },
  { day: "eigth", link: "" },
  { day: "ninth", link: "" },
  { day: "tenth", link: "" },
  { day: "eleventh", link: "" },
  { day: "twelfth", link: "" },
  { day: "thirteenth", link: "" },
  { day: "fourteenth", link: "" },
  { day: "fifteenth", link: "" },
  { day: "sixteenth", link: "" },
  { day: "seventeenth", link: "" },
  { day: "eighteenth", link: "" },
  { day: "nineteenth", link: "" },
  { day: "twentieth", link: "" },
  { day: "twenty-first", link: "" },
  { day: "twenty-second", link: "" },
  { day: "twenty-third", link: "" },
  { day: "twenty-fourth", link: "" },
  { day: "christmas", link: "" },
];

export default function getDayOfChristmas() {
  const dateToCalculateWith = new Date();

  return (
    daysOfChristmas[dateToCalculateWith.getDay() - 1] || daysOfChristmas[24]
  );
}
