import React from "react";

const Support = () => {
  return (
    <div className="flex py-32 justify-evenly flex-wrap px-10 gap-4 ">
      {/* Support */}
      <div className="flex space-x-4">
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-20 h-20 text-white bg-[#F36A8D] p-4 rounded-full"
        >
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6z" />
          <path
            fillRule="evenodd"
            d="M13.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V8h-1.5a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z"
          />
        </svg>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl dark:text-white">24/7 Support</h1>
          <p className="text-md text-gray-500 lg:w-[300px]">
            Lorem ipsum dolor sit amet conse adipiscing elit.
          </p>
        </div>
      </div>

      {/* Ownership */}
      <div className="flex space-x-4">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-20 h-20 text-white bg-[#20CA66] p-4 rounded-full"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 00-2-2h-4v-3a2 2 0 002-2V7h1a2 2 0 002-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 01-1.67 4.873z" />
        </svg>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl dark:text-white">24/7 Support</h1>
          <p className="text-md text-gray-500 lg:w-[300px]">
            Lorem ipsum dolor sit amet conse adipiscing elit.
          </p>
        </div>
      </div>

      {/* Teamwork */}
      <div className="flex space-x-4">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-20 h-20 text-white bg-[#FA9161] p-4 rounded-full"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 11a5 5 0 015 5v6h-2v-6a3 3 0 00-2.824-2.995L12 13a3 3 0 00-2.995 2.824L9 16v6H7v-6a5 5 0 015-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 00-.301 1.575L6 16v.086a1.492 1.492 0 00-.356-.08L5.5 16a1.5 1.5 0 00-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 015.5 14zm13 0a3.5 3.5 0 013.5 3.5V22h-2v-4.5a1.5 1.5 0 00-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904A3.42 3.42 0 0118.5 14zm-13-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-13 2a.5.5 0 100 1 .5.5 0 000-1zm13 0a.5.5 0 100 1 .5.5 0 000-1zM12 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl dark:text-white">24/7 Support</h1>
          <p className="text-md text-gray-500 lg:w-[300px]">
            Lorem ipsum dolor sit amet conse adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
