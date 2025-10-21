function Table() {
  return (
    <>
      <div className="m-8">
        <h2 className="text-2xl text-Brown-800 mb-[10px] xl:text-3xl">
          Nutrition
        </h2>
        <p className="text-stone-600 font-outfit mb-[12px] xl:text-lg text-[14px]">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table className="font-outfit w-63 xl:w-[1100px] xl:text-lg">
          <tbody>
            <tr className="border-b-1 border-gray-200">
              <td className="text-stone-600 p-3">Calories</td>
              <td className="text-Brown-800 p-3 font-bold">277kcal</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="text-stone-600 p-3">Carbs</td>
              <td className="text-Brown-800 p-3 font-bold">0g</td>
            </tr>
            <tr className="border-b-1 border-gray-200">
              <td className="text-stone-600 p-3">Protein</td>
              <td className="text-Brown-800 p-3 font-bold">20g</td>
            </tr>
            <td className="text-stone-600 p-3">Fat</td>
            <td className="text-Brown-800 p-3 font-bold">22g</td>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
