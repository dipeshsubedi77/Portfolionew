import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  const categories = ["all", "branding", "design", "marketing", "development"];

  const portfolioData = [
    {
      ImageHref: "https://images.unsplash.com/photo-1741334632363-58022899ce91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      category: "branding",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      ImageHref: "https://images.unsplash.com/photo-1741334632363-58022899ce91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      category: "marketing",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    // Add more projects here
  ];

  return (
    <section className="pt-24 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto max-w-2xl px-4">
        {/* Portfolio Header */}
        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
          <span className="text-primary mb-2 block text-lg font-semibold">
            Our Portfolio
          </span>
          <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
            Our Recent Projects
          </h2>
          <p className="text-body-color text-base dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="w-full flex flex-wrap justify-center mb-12">
          <ul className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleProject(category)}
                  aria-label={`Filter by ${category}`}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === category
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 gap-8">
          {portfolioData
            .filter(
              (project) =>
                showCard === "all" || showCard === project.category.toLowerCase()
            )
            .map((project, index) => (
              <PortfolioCard
                key={index}
                ImageHref={project.ImageHref}
                category={project.category}
                title={project.title}
                button={project.button}
                buttonHref={project.buttonHref}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const PortfolioCard = ({ ImageHref, category, title, button, buttonHref }) => {
  return (
    <div className="relative overflow-hidden rounded-[10px] shadow-lg dark:shadow-box-dark">
      <img
        src={ImageHref}
        alt={`Project: ${title}`}
        className="w-full h-64 object-cover" // Increased height to h-64
      />
      <div className="p-6 dark:bg-dark-2">
        <h3 className="text-dark dark:text-white mb-4 text-xl font-bold">
          {title}
        </h3>
        <a
          href={buttonHref}
          className="inline-block rounded-md border border-stroke dark:border-dark-3 py-2 px-6 text-sm font-medium text-body-color dark:text-dark-6 hover:bg-primary hover:text-white transition"
        >
          {button}
        </a>
      </div>
    </div>
  );
};