const Title = () => {
  return (
    <div
      className="flex flex-col gap-3 mt-10
    sm:mt-[129px]
    xlmt-[140px]"
    >
      <p
        className="white text-4xl linear_grey_1
      sm:text-left sm:w-[360px] sm:text-[44px]
      xl:text-[52px] xl:w-[481px]"
      >
        Para quem quer deixar sua marca na internet.
      </p>

      <p
        className="flex flex-col text-2xl text-grey_1
        sm:text-[23px]
        xl:hidden"
      >
        <span className="sm:text-left">Site</span>
        <span className="sm:text-left">Aplicações web</span>
        <span className="sm:text-left">Aplicações móveis</span>
      </p>
      <p
        className="hidden text-2xl text-grey_1 xl:text-[28px] xl:flex "
      >
        <span className="sm:text-left">Site,</span>
        <span className="sm:text-left">Aplicações web,</span>
        <span className="sm:text-left">Aplicações móveis.</span>
      </p>
    </div>
  );
};

export default Title;
