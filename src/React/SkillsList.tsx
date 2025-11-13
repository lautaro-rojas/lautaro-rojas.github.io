import React, { useState } from "react";

const CategoryIcons = {
  "Web Apps": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "APIs REST": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 3H20C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9V4C3 3.44772 3.44772 3 4 3ZM5 5V8H19V5H5ZM4 14H20C20.5523 14 21 14.4477 21 15V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V15C3 14.4477 3.44772 14 4 14ZM5 16V19H19V16H5ZM7 6H9V7H7V6ZM7 17H9V18H7V17Z"></path>
    </svg>
  ),
  "DevOps & Automation": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM8.66667 12L5.83823 9.17157L7.25244 7.75736L11.4951 12L7.25244 16.2426L5.83823 14.8284L8.66667 12ZM18 15V17H12V15H18Z"></path>
    </svg>
  ),
  "Database Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 3C16.4183 3 20 4.79086 20 7V17C20 19.2091 16.4183 21 12 21C7.58172 21 4 19.2091 4 17V7C4 4.79086 7.58172 3 12 3ZM12 5C8.68629 5 6 6.34315 6 8C6 9.65685 8.68629 11 12 11C15.3137 11 18 9.65685 18 8C18 6.34315 15.3137 5 12 5ZM18 10.2361C16.6125 11.9076 14.4544 13 12 13C9.54564 13 7.38747 11.9076 6 10.2361V12.5C6 14.1569 8.68629 15.5 12 15.5C15.3137 15.5 18 14.1569 18 12.5V10.2361ZM18 14.7361C16.6125 16.4076 14.4544 17.5 12 17.5C9.54564 17.5 7.38747 16.4076 6 14.7361V17C6 18.6569 8.68629 20 12 20C15.3137 20 18 18.6569 18 17V14.7361Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Apps": [
      "SaaS Platforms: Building the logic behind Software as a Service products.",
      "Internal Tools: Developing custom dashboards and automation tools for business processes.",
      "Cloud-Native Solutions: Deploying resilient applications ready for the cloud.",
    ],
    "APIs REST": [
      "Scalable Architectures: Design of robust endpoints using .NET and Node.js.",
      "Security & Auth: Implementation of JWT, OAuth, and secure data protection standards.",
      "Database Optimization: Efficient SQL queries and schema design for high performance.",
      "Documentation: Clear API standards using Swagger/OpenAPI for easy integration.",
    ],
    "DevOps & Automation": [
      "CI/CD Pipelines: Designing workflows to automate testing and deployment with GitHub Actions.",
      "Process Automation: Scripting custom tools to eliminate manual tasks and boost productivity.",
      "Code Quality: Integrating linters and automated testing to ensure robust releases.",
    ],
    "Database Engineering": [
      "Schema Design: Modeling complex relational databases for scalability and integrity.",
      "Performance Tuning: Optimizing SQL queries and indexing for high-speed data retrieval.",
      "Data Security: Implementing best practices to protect sensitive information.",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
