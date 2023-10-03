import React from "react";

export default function Contacts() {
  return (
    <div className="divide-y divide-gray-500 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Contacts
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <form className="flex flex-col justify-center items-center py-4 space-y-2 w-96">
          <div className="w-full">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Fullname
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your fullname here"
              className="w-full placeholder:dark:text-white/50 dark:text-white shrink h-12 px-4 text-base border border-black dark:border-white bg-white dark:bg-transparent rounded-lg focus:outline-2 focus:outline focus:outline-offset-2 focus:outline-green-700 focus:ring-transparent focus:border-black
              "
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Email
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your Email here"
              className="inputForm w-full"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text text-black dark:text-white">
                Subject
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your Subject here"
              className="inputForm w-full"
            />
          </div>
          <div className="w-full">
            <label className="label text-black dark:text-white">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="inputForm w-full h-24"
              placeholder="Enter our Message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full font-semibold bg-green-500 p-2 rounded-lg hover:bg-green-600 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
