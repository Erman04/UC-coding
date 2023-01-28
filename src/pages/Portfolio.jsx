import { Pagination, PortfolioSlider } from "../components";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const [currentItems, setCurrentItems] = useState();
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="You can see here our portfolio lists!"
        />
        <link rel="canonical" href="https://uc-coding.uz/portfolio" />
      </Helmet>
      <section className=" mt-[100px] py-14">
        <div className="main-container">
          <h1 className="mb-[50px] text-4xl font-bold text-ink">
            Избранные <span className="font-bold text-inkLight">проекты</span>{" "}
          </h1>

          <div className="mb-20">
            <PortfolioSlider />
          </div>

          <p className="mb-8 text-4xl font-bold text-ink">
            Отзывы о <span className="font-bold text-inkLight">работе</span>
          </p>

          <div className="flex flex-wrap justify-evenly">
            {currentItems?.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                key={i}
                className="portfolio-recomended relative mb-9 h-[207px] w-[373px] rounded-md shadow-lg"
              >
                <img
                  src={item.imgUrl}
                  alt="portfolio img"
                  className="h-full w-full rounded-md object-cover"
                />
              </a>
            ))}
          </div>
          <Pagination itemsPerPage={10} setCurrentItems={setCurrentItems} />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
