function ButtonsContent({ btnClick }) {
  let calItem = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div>
        {calItem.map((item) => (
          <button
            key={item}
            className="btn btn-outline-secondary btns"
            onClick={(event) => btnClick(event,item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonsContent;
