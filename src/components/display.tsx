import getDayOfChristmas from "../the-business";

const Display = ({ day, link }: { day: string; link: string }) => (
  <div className="flex justify-center">
    <h1>On the {day} day of Christmas, Ellesse gave to me...</h1>
    <iframe src={link} />
  </div>
);

export default Display;
