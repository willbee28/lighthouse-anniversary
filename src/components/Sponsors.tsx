const Sponsors = () => {
  return (
    <>
      <div className="flex items-center text-6xl font-semibold mt-16 text-center leading-12">
        <span>Special Thanks to our Sponsors</span>
      </div>
      <div className="flex items-center text-5xl font-semibold mt-16 text-center leading-12">
        <hr className="border-1 w-30 mx-2 border-slate-600" />
        <span>Lense Level</span>
        <hr className="border-1 w-30 mx-2 border-slate-600" />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <div className="w-80 h-80 flex justify-center items-center">
          <a
            href="https://www.petitbon.com/"
            className="hover:bg-blue-100 hover:rounded-full p-4"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-full h-full"
              src="/sponsor-logos/petitbon.png"
              alt="Petitbon"
            />
          </a>
        </div>
        <div className="w-100 h-80 flex justify-center items-center">
          <a
            href="https://www.constellationhome.com/md/areas-we-serve/anne-arundel-county/"
            className="hover:bg-blue-100 hover:rounded-full p-4"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-full h-full"
              src="/sponsor-logos/constellation.png"
              alt="Constellation"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center text-4xl font-bold mt-16 text-center leading-12">
        <hr className="border-1 w-30 mx-2 border-slate-600 " />
        <span>Privy Level</span>
        <hr className="border-1 w-30 mx-2 border-slate-600" />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-12 mt-1">
        <div className="w-40 h-44 flex justify-center items-center">
          <a
            href="https://www.chesapeakeconservancy.org/"
            className="hover:bg-blue-100 hover:rounded-full p-4"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-full h-full"
              src="/sponsor-logos/chesapeake.svg"
              alt="Chesapeake"
            />
          </a>
        </div>
        <div className="w-56 h-48 flex justify-center items-center">
          <a
            href="https://www.msimarinesolutions.com/"
            className="hover:bg-blue-100 hover:rounded-full p-4"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-full h-full"
              src="/sponsor-logos/marine.png"
              alt="Marine Solutions"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center text-3xl font-semibold mt-16 text-center leading-12">
        <hr className="border-1 w-12 mx-2 border-slate-600" />
        <span>Bodacious Level</span>
        <hr className="border-1 w-12 mx-2 border-slate-600" />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-12 mt-1">
        <div className="w-56 h-56 flex justify-center items-center">
          <a
            href=""
            className="hover:bg-primary bg-secondary rounded-4xl p-4"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-full h-full"
              src="/sponsor-logos/mh.png"
              alt="MH Sponsor"
            />
          </a>
        </div>
        <div className="w-30 h-52 flex flex-col justify-center items-center">
          <a
            href="https://www.eyeonannapolis.net/"
            className="hover:bg-blue-100 hover:rounded-full "
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-full h-full"
              src="/sponsor-logos/eye.png"
              alt="Eye on Annapolis"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-center leading-6 text-lg mt-16">
        <div className="flex flex-row gap-6 justify-center">
          <div>Sponsorships still available</div>
          <div>
            Contact John Potvin ( jpotvin48@gmail.com ) for more information
          </div>
        </div>
        <div>
          Advertising in program guide available. ¼ Page $350 ½ Page $500 Full
          Page $750
        </div>
      </div>
    </>
  );
};

export default Sponsors;
