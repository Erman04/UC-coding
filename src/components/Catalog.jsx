import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const catalog = [
  {
    title: "Удобный интерфейс",
    info: "Блоковая подача информации, удобные кнопки, карточки товаров, понятное меню и лёгкая навигация по многостраничному сайту.",
  },
  {
    title: "Продающая структура",
    info: "Делаем анализ вашей целевой аудитории и вашего предложения. Опираясь на анализ прописываем продающуюу структуру сайта.",
  },
  {
    title: "Адаптивность",
    info: "Сайт корректно отображается на различных устройствах, элементы динамически подстраиваются под различные разрешения экрана, что повышает конверсию сайта в покупку.",
  },
  {
    title: "Уникальный дизайн",
    info: "Не пользуемся шаблонными решениями. Под каждый проект разрабатывается индивидуальный дизайн который подчеркнет имидж компании.",
  },
  {
    title: "Защита и безопасность",
    info: "Подключаем HTPS протокол, защиту от DDOS атак, чтобы данные клиентов были в безопасности.",
  },
  {
    title: "SEO оптимизация",
    info: "Сайты соответствуют требованиям поисковой оптимизации, они без труда покоряют топы поисковой выдачи Яндекс и Google.",
  },
];

const Catalog = () => {
  return (
    <section className="mt-[4rem] md:mt-[7rem] lg:mt-[16rem]" id="next-section">
      <div className="main-container">
        <h1 className="text-4xl font-bold text-ink">
          Что вы <span className="font-bold text-inkLight">получаете ?</span>
        </h1>
        <div className="my-12 flex flex-wrap justify-between">
          {catalog?.map((item, i) => (
            <motion.div
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.5 }}
              key={i}
              viewport={{ once: true }}
              className="group mb-12 w-full rounded-[10px] bg-white px-3 pt-2 pb-4 hover:bg-[#E37575] md:w-[45%] xl:w-[30%]"
              style={{
                boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
                transition: "background-color 0.2s",
              }}
            >
              <div>
                <h1
                  className="text-6xl font-bold text-white"
                  style={{
                    textShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  0{i + 1}
                </h1>
                <p className="mt-1 mb-2 text-sm font-semibold text-ink group-hover:text-white">
                  {item.title}
                </p>
                <div className="mb-2 h-[2px] w-[45%] bg-[#e37575] group-hover:bg-white"></div>
                <p className="text-xs text-ink group-hover:text-white">
                  {item.info}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mb-14 text-center">
          <Link
            to="/price"
            className="rounded bg-inkLight py-5 px-[72px] font-semibold text-white hover:bg-inkHover"
          >
            Узнать стоимость
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
