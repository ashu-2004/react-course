import { useEffect, useState } from "react";

function ClockContent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval Set up")
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval Cleared");
    };
  }, []);

  return (
    <>
      <p>This is the clock that shows the time in Bharat at all times</p>
      <p>
        This is the current time : {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()} AM
      </p>
    </>
  );
}

export default ClockContent;
