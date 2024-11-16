function ClockContent(){
    let time=new Date();
    return(
        <>
        <p>This is the clock that shows the time in Bharat at all times</p>
        <p>This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} AM</p>
        </>
    )
}

export default ClockContent;