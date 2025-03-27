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
      <div className="flex flex-row gap-12 mt-12">
        <div className="flex flex-col justify-center">
          <a
            href="https://www.petitbon.com/"
            className="hover:bg-blue-100 hover:rounded-full p-8"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/sponsor-logos/petitbon.png" width={300} height={300} />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://www.constellationhome.com/md/areas-we-serve/anne-arundel-county/"
            className="hover:bg-blue-100 hover:rounded-full p-8"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/sponsor-logos/constellation.png"
              width={380}
              height={380}
            />
          </a>
        </div>
      </div>
      <div className="flex items-center text-4xl font-bold mt-16 text-center leading-12">
        <hr className="border-1 w-30 mx-2 border-slate-600 " />
        <span>Privy Level</span>
        <hr className="border-1 w-30 mx-2 border-slate-600" />
      </div>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col justify-center">
          <a
            href="https://www.chesapeakeconservancy.org/?utm_source=Google&utm_medium=CPC&utm_campaign=CB&gad_source=1&gclid=Cj0KCQjwy46_BhDOARIsAIvmcwNJeEmcc0Hvpj-8-ib-h5ay3T96i5Zpc8vbGjz9gLMvGCO_JGbG5AwaAtWiEALw_wcB"
            className="hover:bg-blue-100 hover:rounded-full p-8"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/sponsor-logos/chesapeake.svg" width={150} height={150} />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://www.msimarinesolutions.com/"
            className="hover:bg-blue-100 hover:rounded-full p-8"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/sponsor-logos/marine.png" width={200} height={200} />
          </a>
        </div>
      </div>
      <div className="flex items-center text-3xl font-semibold mt-16 text-center leading-12">
        <hr className="border-1 w-12 mx-2 border-slate-600 " />
        <span>Bodacious Level</span>
        <hr className="border-1 w-12 mx-2 border-slate-600" />
      </div>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col justify-center">
          <a
            href=""
            className="hover:bg-primary bg-secondary rounded-4xl p-4"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/sponsor-logos/mh.png" width={250} height={250} />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://www.eyeonannapolis.net/"
            className="hover:bg-blue-100 hover:rounded-full p-8"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/sponsor-logos/eye.png" width={150} height={150} />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href=""
            className="hover:bg-blue-100 hover:rounded-full p-8"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/sponsor-logos/chesapeake.svg" width={150} height={150} />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-center leading-6 text-lg mt-16">
        <div className="flex flex-row gap-6">
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
