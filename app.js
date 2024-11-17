const { useState } = React;

function MyApp() {
  const [date, setDate] = useState(new Date());

  setTimeout(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div>
      <h1>New Year Countdown!</h1>
      <h2>{date.toLocaleTimeString()}.</h2>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
