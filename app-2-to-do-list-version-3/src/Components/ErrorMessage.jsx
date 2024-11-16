function ErrorMessage({items}){
    return(
        <>
        {(items.length==0) && <h1>Enjoy your day</h1>}
        </>
    )
}

export default ErrorMessage;