import { useSelector } from "react-redux";

function Content() {
  const { counterVal } = useSelector((store) => store.counter); //It fetches the counter value only when the counter is changed means it increamented or decremented.
  //useSelector performs all the functions of the Subscription where it take cares that it must only run when the counter is changed
  //If component is out of memory then the subscription automatically gets stop.
  // const counter = counterObj.counter;
  return <p className="lead mb-4">Check counter current value: {counterVal}</p>;
}

export default Content;
