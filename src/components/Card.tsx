function Card() {
  return (
    <>
      <div className="font-outfit mb-[20px] bg-rose-50 rounded-lg m-8 p-5">
        <h3 className="text-rose-800 font-semibold text-lg xl:text-2xl">
          Preparation time
        </h3>
        <ul className="list-disc pl-5 text-stone-600 p-3 text-[13px] xl:text-lg">
          <li className="my-1">
            <span className="font-semibold">Total:</span> Approximately 10
            minutes
          </li>
          <li className="my-1">
            <span className="font-semibold">Preparation:</span> 5 minutes
          </li>
          <li className="my-1">
            <span className="font-semibold">Cooking:</span> 5 minutes
          </li>
        </ul>
      </div>
    </>
  );
}

export default Card;
