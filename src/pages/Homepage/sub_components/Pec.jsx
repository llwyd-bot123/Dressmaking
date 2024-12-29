function Pec({ placeholderImage }) {
  return (
    <div className="px-5 lg:px-20 bg-[#E5E5E5]">
      <div className="grid grid-cols-1 gap-10 lg:gap-20 md:grid-cols-2 lg:grid-cols-2 my-14 lg:my-28">
        <div className="flex flex-col justify-center order-2 text-left lg:order-1">
          <h1 className="mb-6 text-3xl leading-normal tracking-wide lg:text-5xl ">
            Personal Entrepreneurial Competencies
          </h1>
          <p className="mb-8 text-base lg:text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
          <button className="px-6 py-3 text-base border rounded-md lg:text-lg hover:bg-blue-100 lg:px-12 text-text_link border-text_link text-md w-max">
            More Info
          </button>
        </div>

        <div className="order-1 lg:order-2">
          <img src={placeholderImage} className="w-full h-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Pec;
