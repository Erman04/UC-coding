import features1 from "../assets/images/features-1.png";
import features2 from "../assets/images/features-2.png";
import features3 from "../assets/images/features-3.png";
import features4 from "../assets/images/features-4.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const feature = [
  {
    imgUrl: features1,
    title: "Landing page",
    info: [
      "изучаем ваш бизнес",
      "анализируем конкурентов",
      "создаем уникальный дизайн",
      "адаптивный сайт",
      "тех.поддержка(1-год)",
    ],
  },
  {
    imgUrl: features2,
    title: "Корпоративный сайт",
    info: [
      "изучаем ваш бизнес",
      "анализируем конкурентов",
      "создаем уникальный дизайн",
      "адаптивный сайт",
      "от 3-8 страниц",
      "подключение административной панели",
      "интеграция CRM",
      "тех.поддержка (1-год)",
    ],
  },
  {
    imgUrl: features3,
    title: "Телеграм бот",
    info: [
      "изучаем ваш бизнес",
      "анализируем то что вам нужно",
      "все типы телеграм ботов(любой сложности)",
      "интеграция платежной системы",
      "добавление административных панельи",
      "тех.поддержка (год)",
    ],
  },
  {
    imgUrl: features4,
    title: "Интернет Магазин",
    info: [
      "изучаем ваш бизнес",
      "анализируем конкурентов",
      "создаем уникальный дизайн",
      "адаптивный сайт",
      "добавление 25 товаров",
      "подключение административной панели",
      "интеграция CRM",
      "интеграция платежной системы (Click, Payme...)",
      "видео инструкция (Использования административной панели)",
      "тех.поддержка (1-год)",
    ],
  },
];

const Feature = () => {
  return (
    <section>
      <div className="main-container">
        <h1 className="text-4xl font-bold text-ink">
          Что мы <span className="font-bold text-inkLight">умеем ?</span>
        </h1>
        {feature.map((item, i) => (
          <motion.div
            className="feature mb-16 items-center md:flex"
            key={i}
            whileInView={{ y: [30, 0] }}
            viewport={{ once: true }}
          >
            <div className="mx-auto block w-full md:w-1/2">
              <motion.img
                whileInView={{ scale: [0.8, 1] }}
                viewport={{ once: true }}
                src={item.imgUrl}
                alt="features"
                // className="mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="mb-4 text-lg font-semibold text-inkLight">
                {item.title}
              </h3>
              <ul>
                {item.info.map((p, i) => (
                  <li className="flex items-center" key={i}>
                    <span className="block h-2 w-2 rounded-full bg-ink"></span>
                    <p className="ml-3 text-ink">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="my-[5rem] text-center">
        <Link
          to="/price"
          className="rounded bg-inkLight py-5 px-[72px] font-semibold text-white hover:bg-inkHover"
        >
          Узнать стоимость
        </Link>
      </div>
    </section>
  );
};

export default Feature;
