import style from './ErrorMessage.module.css';

function ErrorMessage({ items }) {
  return (
    // let foodItem=[];//   if(foodItem.length==0){
    //     return <h1>I am still hungry!</h1>
    //   }
    <>
      {/* {foodItem.length==0 ? <h1>I am still Hungry!</h1> : null} */}
      {items.length == 0 && <h1 className={style.text}>I am still hungry!</h1>}
    </>
  );
}

export default ErrorMessage;
