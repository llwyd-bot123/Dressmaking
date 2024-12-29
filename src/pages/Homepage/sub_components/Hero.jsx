function Hero({ placeholderImage }) {
  return (
    // <div
    //   className="relative h-[700px] lg:h-[960px] md:h-[800px] bg-cover bg-center bg-no-repeat"
    //   style={{ backgroundImage: `url(${placeholderImage})` }}
    // >
    <div className="relative h-[700px] lg:h-[960px] md:h-[800px] bg-[#E5E5E5]">
      <div className="absolute p-5 lg:p-6 bottom-14 lg:bottom-28 lg:left-14">
        <h1 className="mb-10 text-3xl tracking-wide lg:mb-20 lg:text-5xl">
          Dressmaking
        </h1>
        <p className="mt-2 mb-4 text-lg font-bold lg:text-xl">Introduction</p>
        <p className="w-full mt-2 mb-6 text-base leading-7 md:text-lg lg:mb-8 lg:w-2/4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.
        </p>
        <button className="px-6 py-3 text-base text-white border rounded-md bg-text_link text-md hover:bg-blue-700 lg:text-lg lg:px-12">
          For more info
        </button>
      </div>
    </div>
  );
}

export default Hero;
