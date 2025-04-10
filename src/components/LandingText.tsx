import Sponsors from "./Sponsors";

function LandingText() {
  return (
    <div className="bg-amber-50">
      <div className="text-5xl text-center my-32 leading-24 text-slate-600 font-semibold px-12 lg:px-48">
        Join us for{" "}
        <span className="text-primary">
          {" "}
          The <span>150th</span> Anniversary Celebration{" "}
        </span>
        of the Thomas Point Shoal Lighthouse
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className=" px-12 mt-12 text-4xl leading-12 text-center ">
          The Thomas Point Shoal Lighthouse will celebrate its 150th anniversary
          this year with a special celebration on August 9, 2025. The
          Anniversary Celebration is a call to action because the lighthouse
          faces an existential threat from sea levels rising.
          <br />
          <br />
          Since 2023, the landing dock has been damaged repeatedly by numerous
          serious storms and higher than normal tides. Our goal is to raise the
          lighthouse level to ensure that this historic structure will remain
          for our grandchildren and great grandchildren.
          <br />
          <br />
        </div>
        <img
          src="./Seagulls.jpg"
          alt="Lighthouse Picture 1"
          className="h-150 w-200 object-cover object-left mx-auto rounded-sm"
        />
      </div>
      <div className="flex flex-col items-center pt-24 pb-36 px-12 lg:px-48 text-4xl leading-12 text-center">
        Sponsors and ticket sales for the event will provide funding to develop
        an engineering solution on how to elevate the lighthouse.
      </div>

      <div className="flex flex-col items-center pt-36 sm:px-12 3xl:px-48 bg-primary text-primary-foreground text-4xl">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <img
            src="./Thomas Point.jpg"
            alt="Lighthouse Picture 1"
            className="w-150 h-200 mx-auto object-cover rounded-sm"
          />
          <div className="flex flex-col items-center">
            <div className="flex items-center font-semibold mb-8 mt-12">
              <hr className="border-1 w-30 mx-2" />
              <span className="text-center">Invited Guest Speakers</span>
              <hr className="border-1 w-30 mx-2" />
            </div>
            <div className="text-center font-light leading-12">
              - US Senator{" "}
              <b className="text-orange-200  font-bold">Chris Van Hollen</b>
              <br /> - Congressman{" "}
              <b className="text-orange-200 font-bold">John Sarbanes</b>
              <br />- Maryland Governor{" "}
              <b className="text-orange-200 font-bold">Wes Moore</b>
              <br /> - State Senator{" "}
              <b className="text-orange-200 font-bold">Sarah Elfreth</b>
              <br /> - County Executive{" "}
              <b className="text-orange-200 font-bold">Stuart Pittman</b>
              <br /> - Annapolis Mayor{" "}
              <b className="text-orange-200 font-bold">Gavin Buckley</b>
              <br /> - Former Annapolis Mayor{" "}
              <b className="text-orange-200 font-bold">Ellen Moyer</b>
              <br /> - US Lighthouse President{" "}
              <b className="text-orange-200 font-bold">Henry Gonzalez</b>
              <br /> - National Park Service Chesapeake Gateways Superintendent{" "}
              <b className="text-orange-200 font-bold">Wendy O’Sullivan</b>
              <br /> - Chesapeake Conservancy President and CEO{" "}
              <b className="text-orange-200 font-bold">Joel Dunn</b>
            </div>
          </div>
        </div>
        <div className="flex items-center font-semibold mt-24">
          <hr className="border-1 w-30 mx-2" />
          <span className="text-center">Included in your ticket</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="flex flex-col my-8 gap-4 text-center leading-16">
          -Dinner
          <br />
          - Door prizes
          <br />
          -Wine pull
          <br />
        </div>
        <div className="flex flex-col">
          <span className="text-center">With music by the incomparable</span>{" "}
          <br />
          <b className="text-orange-200 font-bold text-center">
            Eastport Oyster Boys
          </b>
        </div>
        <div className="flex items-center font-semibold mt-16 mb-4">
          <hr className="border-1 w-30 mx-2" />
          <span className="">When</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="mt-8 font-semi-bold">Saturday, August 9, 2025</div>
        <div className="mt-4">6:30 pm to 9:00 pm</div>
        <div className="flex items-center font-semibold mt-16">
          <hr className="border-1 w-30 mx-2" />
          <span className="">Where</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-24 lg:gap-12">
          <div className="flex justify-center">
            <iframe
              className="rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.833947854635!2d-76.507076!3d38.985019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f6febe704655%3A0x86dfe775a92d93e3!2sNavy-Marine%20Corps%20Memorial%20Stadium!5e0!3m2!1sen!2sus!4v1683678924132"
              width="500"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-center leading-12 mt-28 ml-4">
            <div className="">Navy Marine Corp Memorial Stadium</div>
            <div className="">Taylor Avenue, Annapolis, Md.</div>
          </div>
        </div>
        <div className="flex items-center font-semibold">
          <hr className="border-1 w-30 mx-2" />
          <span className="text-center">Cost</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="text-center my-12">
          Tickets <b>$150</b> per person (limit 300 tickets)
          <br />
          <br />
          <div className="mt-4">
            Premium tickets <b>$250</b> per person (limit 50 tickets)
          </div>
          <div className="mt-10 leading-14">
            <div>Premium tickets include:</div>
            - Meet and greet with guest speakers
            <br />
            - Special VIP reception (6:00 pm - 6:30 pm)
            <br /> - Early entrance at 6:00pm
          </div>
          <div className="mt-28 mb-10">
            Sales start June 1, 2025 & you can buy tickets{" "}
            <a
              className="text-amber-400 hover:text-blue-900 hover:underline"
              href="https://www.eventbrite.com/organizations/tpsl150celebration"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  my-32 leading-24 text-primary font-semibold mx-12 lg:mx-48">
        <Sponsors />
      </div>
    </div>
  );
}

export default LandingText;
