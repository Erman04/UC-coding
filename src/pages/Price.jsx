import priceBg from "../assets/images/price-bg.png";
import { useState } from "react";
import { PriceCollapse, SliderComponent } from "../components";
import { Helmet } from "react-helmet-async";

const price = [
  {
    type: "Landing page",
    price: "2 800 000",
    info: [
      "Разработка 7 дней",
      "До 4-5 блоков с основной информацией",
      "Составление ТЗ",
      "Адаптивная верстка",
      "Анализ конкурентов",
      "Необходимые интеграции (CRM, оплата)",
      "Индевидуальный дизайн страниц в",
      "корпоротивном стиле",
    ],
  },
  {
    type: "Корпоротивный сайт",
    price: "5 500 000",
    info: [
      "Разработка до 4-5 недель",
      "До 5-8 страниц с индевидуальным",
      "дизайном",
      "Анализ конкурентов",
      "UX дизайн",
      "Адаптивная верстка",
      "Подключение административной панели",
      "Необходимые интеграции (CRM, оплата)",
      "Индивидуальный дизайн страниц в ",
      "корпоротивном стиле",
    ],
  },
  {
    type: "Интернет-магазин",
    price: "10 000 000",
    info: [
      "Разработка от 5 недель",
      "До 8 страниц с индевидуальным ",
      "дизайном",
      "Составление ТЗ",
      "Анализ конкурентов",
      "Проработка UX",
      "Адаптивная верстка",
      "Наполнение товаром",
      "Обучение пользования сайтом",
      "Необходимые интеграции (CRM, оплата)",
    ],
  },
  {
    type: "Телеграм Bot",
    price: "1 000 000",
    info: [
      "Разработка от 1 недель",
      "Анализ конкурентов",
      "Необходимые интеграции (CRM, оплата)",
      "Программирование необходимого ",
      "функционала",
    ],
  },
  {
    type: "DevOPS-CI/CD",
    price: "4 000 000",
    info: [
      "Управление релизами проектов/",
      "продуктов",
      "Мониторинг и резервное копирование",
      "Виртуализация и контейнеризация",
      "Работа с серверами",
      "Nginx, Gunicorn, Apache",
    ],
  },
];

const Price = () => {
  return (
    <>
      <Helmet>
        <title>Price</title>
        <link rel="canonical" href="https://uc-coding.uz/price" />
        <meta
          name="description"
          content="You can familiarize yourself with the prices of our services"
        />
        <meta
          name="keywords"
          content="price website in tashkent, websayt toshkent, websayt narxi toshkent"
        />
      </Helmet>
      <section className="mt-[100px] w-full py-14">
        <div className="main-container relative z-10 rounded-xl bg-inkLight py-[38px] px-8">
          <h1 className=" text-lg font-medium text-white lg:w-3/5">
            Итоговая стоимость разработки сайта складывается от требований
            заказчика выясненные на этапе обсуждения. При расчёте конечной
            стоимости учитываются сложность дизайна и функционала.
          </h1>
          <img
            src={priceBg}
            alt="price bg"
            className="absolute left-0 right-0 top-2 -z-10 w-full"
          />
          <div className="mt-20 lg:hidden">
            {price.map((item, i) => (
              <PriceCollapse data={item} key={i} />
            ))}
          </div>
          <div className="mt-20 hidden lg:block">
            <SliderComponent showContent={3}>
              {price.map((item, i) => (
                <PriceCollapse data={item} key={i} />
              ))}
            </SliderComponent>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
