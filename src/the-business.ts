export interface DayOfChristmas {
  day: string;
  link: string;
}

export const daysOfChristmas: DayOfChristmas[] = [
  { day: "first", link: "https://www.youtube.com/embed/wKbU8B-QVZk" },
  { day: "second", link: "https://www.youtube.com/embed/hpigjnKl7nI" },
  { day: "third", link: "" },
  { day: "fourth", link: "" },
  { day: "fifth", link: "" },
  { day: "sixth", link: "" },
  { day: "seventh", link: "" },
  { day: "eighth", link: "" },
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
  { day: "actual", link: "" },
];

export default function getDayOfChristmas(debug?: boolean) {
  if (debug) {
    return {
      dayOfChristmas: daysOfChristmas[24],
      position: 24,
    };
  }

  const arrayPosition = new Date().getDay() - 1;

  return {
    dayOfChristmas: daysOfChristmas[arrayPosition] || daysOfChristmas[24],
    position: arrayPosition,
  };
}
