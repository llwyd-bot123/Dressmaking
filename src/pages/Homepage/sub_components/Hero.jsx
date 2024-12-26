function Hero() {
  return (
    <div className="h-[960px] bg-[#E5E5E5]">
      <div className="absolute p-6 bottom-28 left-14">
        <h1 className="mb-20 text-5xl tracking-wide">Dressmaking</h1>
        <p className="mt-2 mb-6 text-xl font-extrabold">Introduction</p>
        <p className="w-2/4 mt-2 mb-8 text-lg">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.
        </p>
        <button className="px-12 py-3 text-white border rounded-md bg-text_link text-md">
          For more info
        </button>
      </div>
    </div>
  );
}

export default Hero;
