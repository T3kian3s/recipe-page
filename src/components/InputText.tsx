function InputText() {
  return (
    <>
      <div className="mb-[20px] m-8">
        <h2 className="text-2xl text-Brown-800 mb-[15px] xl:text-3xl">
          Ingredients
        </h2>
        <ul className="list-disc pl-5 marker:text-Brown-800 marker:text-xs font-outfit text-stone-600 space-y-1 xl:text-lg text-[13px]">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>

      <hr className="mb-[20px] m-8 text-gray-200" />

      <div className="mb-[20px] m-8">
        <h2 className="text-2xl text-Brown-800 mb-[15px] xl:text-3xl">
          Instructions
        </h2>
        <ol className="list-decimal pl-5 marker:text-Brown-800 marker:font-semibold font-outfit text-stone-600 space-y-1 xl:text-lg text-[14px]">
          <li>
            <span className="font-semibold">Beat the eggs:</span> In a bowl,
            beat the eggs with a pinch of salt and pepper until they are well
            mixed. You can add a tablespoon of water or milk for a fluffier
            texture.
          </li>
          <li>
            <span className="font-semibold">Heat the pan:</span> Place a
            non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li>
            <span className="font-semibold">Cook the omelette:</span> Once the
            butter is melted and bubbling, pour in the eggs. Tilt the pan to
            ensure the eggs evenly coat the surface.
          </li>
          <li>
            <span className="font-semibold">Add fillings (optional):</span> When
            the eggs begin to set at the edges but are still slightly runny in
            the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </li>
          <li>
            <span className="font-semibold">Fold and serve:</span> As the
            omelette continues to cook, carefully lift one edge and fold it over
            the fillings. Let it cook for another minute, then slide it onto a
            plate.
          </li>
          <li>
            <span className="font-semibold">Enjoy:</span> Serve hot, with
            additional salt and pepper if needed.
          </li>
        </ol>
      </div>

      <hr className="mb-[20px] m-8 text-gray-200" />
    </>
  );
}

export default InputText;
