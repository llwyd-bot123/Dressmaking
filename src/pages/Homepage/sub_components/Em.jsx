function Em() {
  return (
    <div className="px-20 bg-white">
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-28">
        <div className="">
          <img
            src="https://placehold.co/600x400"
            className="w-full h-auto"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center text-left">
          <h1 className="mb-6 text-5xl leading-normal tracking-wide">
            Environment and Market
          </h1>
          <p className="mb-8">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
          <button className="px-12 py-3 border rounded-md text-text_link border-text_link text-md w-max">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Em;
