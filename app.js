const { useState } = React;

// @params d1, d2: Date objects
// @returns json object, {years, months, days}
function compareDates(d1, d2) {
  let [d1y, d1m, d1d] = [d1.getFullYear(), d1.getMonth() + 1, d1.getDate()];
  let [d2y, d2m, d2d] = [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()];
  if (d1 > d2) {
    let years = d1y - d2y;
    let months = d1m - d2m;
    let days = d1d - d2d;
    if (days < 0) {
      months--;
      days += 30;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    return { years, months, days };
  }
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
  let countdownOutput = "";
  if (countdown.years > 0) {
    if (countdown.years === 1) {
      countdownOutput += `${countdown.years} Year, `;
    } else {
      countdownOutput += `${countdown.years} Years, `;
    }
  }
  if (countdown.months > 0) {
    if (countdown.months === 1) {
      countdownOutput += `${countdown.months} Month, `;
    } else {
      countdownOutput += `${countdown.months} Months, `;
    }
  }
  if (countdown.days > 0) {
    if (countdown.days === 1) {
      countdownOutput += `${countdown.days} Day remaining!`;
    } else {
      countdownOutput += `${countdown.days} Days remaining!`;
    }
  }

  return (
    <div>
      <h1>
        New Year Countdown!{" "}
        {`${newYear.getFullYear()}-${
          newYear.getMonth() + 1
        }-${newYear.getDate()}`}
      </h1>
      <h2>{currentDate.toLocaleTimeString()}</h2>
      <h2>{countdownOutput}</h2>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
