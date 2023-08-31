import Image from "next/image";

const Upwork = () => {
  return (
    <section className="px-4 py-10 md:p-10 bg-white">
      <div className="container mx-auto border border-neutral-300 rounded-3xl p-8 md:p-20 bg-green-600 shadow-xl md:flex justify-between items-center">
        <div className="md:flex-1 mb-4 md:mb-0">
          <Image
            src="/upwork_logo.png"
            alt="test"
            width={500}
            height={500}
            className="w-56"
          />
          <div className="flex mt-4">
            <h3 className="md:text-xl text-white mr-3 md:mr-6 flex font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 md:w-8 md:h-8 mr-1 md:mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Top Rated
            </h3>
            <h3 className="md:text-xl text-white flex font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 md:w-8 md:h-8 mr-1 md:mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              100% Job Success
            </h3>
          </div>
        </div>
        <div className="md:flex-1">
          <p className="text-white md:text-2xl italic mb-4">
            &quot;Great developer. Fixed a tricky bug. Very happy.&quot;
          </p>
          <p className="text-white md:text-2xl italic">
            &quot;Excellent freelancer. Worked quickly and was able to follow
            instructions well. Will plan to work with him again.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Upwork;
