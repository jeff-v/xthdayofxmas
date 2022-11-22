import { daysOfChristmas } from "../the-business";
import { useCallback, useEffect, useState } from "preact/hooks";
import { DayOfChristmas } from "../the-business";

interface AdventTrackerProps {
  position: number;
  setSelectedDate: (dayOfChristmas: DayOfChristmas) => void;
}

export default function AdventTracker({
  position,
  setSelectedDate,
}: AdventTrackerProps) {
  const [debug, setDebug] = useState<boolean>(false);
  const [datePointer, setDatePointer] = useState<number>(position);

  useEffect(() => {
    setSelectedDate(daysOfChristmas[datePointer]);
  }, [datePointer]);

  const generateRows = useCallback(() => {
    return daysOfChristmas
      .filter((_, index) =>
        debug
          ? index <= daysOfChristmas.length
          : index <= new Date().getDate() - 1
      )
      .map((day, index) => (
        <button
          onClick={() => setDatePointer(index)}
          key={day.day}
          className={`w-2 h-2 border-2  ${
            datePointer === position ? "border-blue-500" : "border-black"
          }`}
        >
          {index + 1}
        </button>
      ));
  }, [datePointer, debug]);

  return (
    <div className="flex row">
      <button onClick={() => setDebug(!debug)}>set debug</button>
      <div>{generateRows()}</div>
    </div>
  );
}
