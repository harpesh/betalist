import React from "react";

const Homepage = () => {
  const topics = [
    { icon: "🤖", title: "AI Tools", link: "/topics/ai-tools" },
    { icon: "💻", title: "SaaS", link: "/topics/saas" },
    { icon: "🔧", title: "Developer Tools", link: "/topics/developer-tools" },
    { icon: "🛠", title: "Web Development", link: "/topics/web-development" },
    { icon: "💼", title: "AI Marketing", link: "/topics/ai-marketing" },
    { icon: "📧", title: "Email", link: "/topics/email" },
    { icon: "🤖", title: "AI Chat", link: "/topics/ai-chat" },
    { icon: "💬", title: "Social Media", link: "/topics/social-media" },
    { icon: "💻", title: "Web Design", link: "/topics/web-design" },
    { icon: "💻", title: "Mac Applications", link: "/topics/mac-applications" },
    { icon: "📋", title: "Task Management", link: "/topics/task-management" },
    { icon: "💿", title: "Software", link: "/topics/software" },
  ];

  return (
    <div className="!max-w-[96rem] my-0 mx-auto left-0 right-0">
      <div>
        <div className="flex mx-36 justify-start">
          <div className="mt-2 !w-[96rem] grid grid-flow-col sm:grid-flow-row grid-rows-1 gap-x-1 scrollbar-hide sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 sm:gap-x-4 -mx-2">
            {topics.map((topic, index) => (
              <a
                key={index}
                className="flex items-center gap-1 px-2 hover:bg-gray-100 group sm:gap-4 sm:hover:-my-[1px]"
                href={topic.link}
              >
                <div className="p-1 rounded xborder bg-gray-50 aspect-[1]">
                  {topic.icon}
                </div>
                <div className="border-gray-100 grow py-3 px-1 flex items-center gap-1 justify-between min-w-0 sm:border-b">
                  <div className="grow truncate">{topic.title}</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="shrink-0 h-5 w-5 invisible group-hover:visible group-hover:text-gray-500 hidden sm:block"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="container mx-auto sm:p-4 md:p-8">
            <div className="bg-black sm:rounded-lg text-white p-8 relative">
              <button
                data-action="dismissible#dismiss"
                className="absolute top-3 right-3 p-1 rounded-full bg-gray-800 text-gray-500 hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path>
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-2">
                <h1 className="font-extrabold text-2xl md:text-6xl">
                  Discover tomorrow's startups, today.
                </h1>

                <div className="flex flex-col gap-4">
                  <h2 className="text-xl md:text-3xl">
                    BetaList helps you find early-stage startups before they
                    make it big.
                  </h2>

                  <div className="flex gap-4 mt-auto text-xl md:text-2xl font-medium">
                    <a
                      className="block rounded-full bg-[#00CCD1] hover:bg-betalist-green-dark text-black px-5 py-2"
                      href="/submit"
                    >
                      Submit startup
                    </a>
                    <a
                      className="block rounded-full bg-gray-800 hover:bg-gray-700 text-gray-500 hover:text-gray-300 px-5 py-2"
                      data-turbo-frame="modal"
                      href="/users/sign_in"
                    >
                      Sign in
                    </a>
                  </div>
                  <div>
                    <div>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
