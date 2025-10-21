function Hero() {
  return (
    <>
      <header>
        <img
          src="../src/assets/images/image-omelette.jpeg"
          alt="imagen de omelette"
          className="mb-[28px] rounded-lg xl:m-8"
        />
        <h1 className="text-3xl mb-[11px] m-8 xl:text-5xl">
          Simple Omelette Recipe
        </h1>
        <p className="font-outfit text-stone-600 mb-[30px] text-[13px] m-8 xl:text-xl">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </header>
    </>
  );
}

export default Hero;
