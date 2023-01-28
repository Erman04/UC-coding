import aboutBg from "../assets/images/about-bg.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="main-container">
      <div>
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-ink">
              Исследуем <span className="font-bold text-inkLight">бизнес</span>
            </h1>
            <div className="mt-14">
              <p className="text-lg text-ink">
                Каждый клиент – своя история. Мы не берем шаблонные решения, а
                исследуем рынок конкретно под ваши цели и задачи. <br /> <br />{" "}
                Сделать интернет-магазин с нуля непросто. Нужен сайт с
                качественной разработкой дизайна, который не будет отвлекать от
                сути, наполнением и рабочими модулями. Кроме этого, для
                успешного запуска электронной торговой площадки владельцу
                бизнеса требуется найти поставщиков, выбрать товарные позиции,
                просчитать рентабельность, уладить другие организационные
                вопросы вне сети.
                <br /> <br /> Создание интернет-магазина лучше делегировать на
                профессионалов. Мы возьмем на себя вопросы по разработке
                интернет-магазина под ключ. Специалисты компании предоставляют
                заказчику готовый продающий сайт. Он уже наполнен контентом,
                ориентирован на конечного потребителя и интуитивно понятен для
                заказчика.
              </p>
            </div>
          </div>
          <div className="relative mt-3 lg:mt-0 lg:w-1/2">
            <motion.img
              whileInView={{ scale: [0.7, 1] }}
              viewport={{ once: true }}
              src={aboutBg}
              alt="bg"
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
