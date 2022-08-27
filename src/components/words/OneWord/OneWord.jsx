function OneWord(props) {
  return (
    <>
    <div className="relative w-full p-2">
      <div className="flex flex-wrap w-full font-Hatolie text-redlight-100 place-content-center text-7xl ">
        <h1>{props.Word.toUpperCase()}</h1>
      </div>
    </div>

    </>
  );
}

export default OneWord;
