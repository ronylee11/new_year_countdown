const { useState } = React;

// @params d1, d2: Date objects
// @returns json object, {years, months, days}
function compareDates(d1, d2) {
  let [d1y, d1m, d1d] = [d1.getFullYear(), d1.getMonth() + 1, d1.getDate()];
  let [d2y, d2m, d2d] = [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()];
  return { years: 1, months: 1, days: 1 };
}

function MyApp() {
  const [currentDate, setCurrentDate] = useState(new Date());

  setTimeout(() => {
    setCurrentDate(new Date());
  }, 1000);

  // new year countdown
  // new year = 2025-01-29
  const newYear = new Date("2025-01-29");
  let countdown = {};
  // time arithmetic
  if (newYear > currentDate) {
    countdown = compareDates(newYear, currentDate);
  } else {
    return (
      <div>
        <h1>Happy New Year 2025!</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>New Year Countdown!</h1>
      <h2>{currentDate.toLocaleTimeString()}</h2>
      <h2>
        {`${countdown.years} Years, ${countdown.months} Months, ${countdown.days} Days remaining!`}
        .
      </h2>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
