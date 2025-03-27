import Sponsors from "./sponsors";

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
      <div className="flex flex-col items-center pb-36 px-12 lg:px-48 text-4xl leading-12 text-center">
        The Thomas Point Shoal Lighthouse will celebrate its 150th anniversary
        this year with a special celebration on August 9, 2025. The Anniversary
        Celebration is a call to action because the lighthouse faces an
        existential threat from sea levels rising.
        <br />
        <br />
        Since 2023, the landing dock has been damaged repeatedly by numerous
        serious storms and higher than normal tides. Our goal is to raise the
        lighthouse level to ensure that this historic structure will remain for
        our grandchildren and great grandchildren.
        <br />
        <br />
        Sponsors and ticket sales for the event will provide funding to develop
        an engineering solution on how to elevate the lighthouse.
      </div>
      <div className="flex flex-col items-center pt-36 px-12 lg:px-48 bg-primary text-primary-foreground text-4xl">
        <div className="flex items-center font-semibold mb-8">
          <hr className="border-1 w-30 mx-2" />
          <span> Guest Speakers</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="text-center">
          US Senator <b>Chris Van Hollen</b>, Congressman John Sarbanes,
          Maryland Governor <b>Wes Moore</b>, State Senator <b>Sarah Elfreth</b>{" "}
          , County Executive <b>Stuart Pittman</b>, Annapolis Mayor{" "}
          <b>Gavin Buckley</b>, former Annapolis Mayor <b>Ellen Moyer</b>, US
          Lighthouse President Henry Gonzalez, National Park Service Chesapeake
          Gateways Superintendent Wendy O’Sullivan, Chesapeake Conservancy
          President and CEO Joel Dunn
        </div>
        <div className="flex items-center font-semibold mt-24">
          <hr className="border-1 w-30 mx-2" />
          <span>Included in your ticket</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="flex flex-col my-8 gap-4 text-center">
          Dinner, door prizes, wine pull, &<div></div>
        </div>
        <div className="">music by the incomparable Eastport Oyster Boys</div>
        <div className="flex items-center font-semibold mt-16 mb-4">
          <hr className="border-1 w-30 mx-2" />
          <span>When</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="my-4">Saturday, August 9, 2025</div>
        <div className="my-4">General Admission: 6:30 pm to 9:00 pm</div>
        <div className="mt-4">Premium tickets: 6:00 – 7:00 pm</div>
        <div className="flex items-center font-semibold mt-16">
          <hr className="border-1 w-30 mx-2" />
          <span>Where</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-24">
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
            <div className="">The Navy Marine Corp Memorial Stadium</div>
            <div className="">Taylor Avenue, Annapolis, Md.</div>
          </div>
        </div>
        <div className="flex items-center font-semibold">
          <hr className="border-1 w-30 mx-2" />
          <span>Cost</span>
          <hr className="border-1 w-30 mx-2" />
        </div>
        <div className="text-center my-12">
          Tickets <b>$150</b> per person (limit 300 tickets)
          <br />
          <br />
          Premium tickets <b>$250</b> per person (limit 50 tickets) (includes
          meet and greet with Speakers and special)
          <br />
          <br />
          Sales start June 1, 2025 & you can buy tickets{" "}
          <a
            href="https://www.eventbrite.com/organizations/tpsl150celebration"
            rel="noreferrer"
            target="_blank"
          >
            here
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center  my-32 leading-24 text-primary font-semibold mx-48">
        <Sponsors />
      </div>
    </div>
  );
}

export default LandingText;
