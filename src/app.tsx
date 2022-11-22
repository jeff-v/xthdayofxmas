import "./app.css";
import Display from "./components/display";
import getDayOfChristmas from "./the-business";
import { useState } from "preact/hooks";
import AdventTracker from "./components/advent-tracker";
import { DayOfChristmas, daysOfChristmas } from "./the-business";

const dateInMilliseconds = Date.now();
const decemberFirst2022 = Date.parse(
  new Date("December 1 2022").toDateString()
);

export function App() {
  const { dayOfChristmas, position } = getDayOfChristmas();
  const [selectedDate, setSelectedDate] =
    useState<DayOfChristmas>(dayOfChristmas);

  // if (dateInMilliseconds < decemberFirst2022) {
  //   return (
  //     <>
  //       <h1>Too early for Christmas :(</h1>
  //       <iframe src="https://www.youtube.com/embed/CQeezCdF4mk"></iframe>
  //     </>
  //   );
  // }

  // if (new Date().getFullYear() > 2022) {
  //   return (
  //     <>
  //       <h1>You missed Christmas! Better luck next year!</h1>,
  //       <iframe
  //         width="560"
  //         height="315"
  //         src="https://www.youtube.com/embed/cJJBtAVwz0c"
  //         title="YouTube video player"
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //       ></iframe>
  //     </>
  //   );
  // }

  return (
    <div>
      <h1 className="flex justify-center">Merry Holidaytimes!</h1>
      <AdventTracker position={position} setSelectedDate={setSelectedDate} />
      <Display day={selectedDate.day} link={selectedDate.link} />
    </div>
  );
}
