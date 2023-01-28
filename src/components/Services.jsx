import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const step = [
  {
    id: 1,
    text: "01. Маркетинговый анализ бизнеса",
  },
  {
    id: 2,
    text: "02. Привлекательный дизайн",
  },
  {
    id: 3,
    text: "03. Профессиональная верстка",
  },
  {
    id: 4,
    text: "04. Тестирование и доработка",
  },
  {
    id: 5,
    text: "05. Запуск сайта",
  },
];

const stepValue = [
  {
    id: 1,
    title: "Маркетинговый анализ бизнеса",
    info: "На предварительном этапе мы выясняем специфику вашего бизнеса, товаров. Отмечаем ваши преимущества и уникальные предложения, изучаем ожидания и потребности целевой аудитории, рассматриваем ближайшее конкурентное окружение.",
  },
  {
    id: 2,
    title: "Привлекательный дизайн",
    info: "Интерфейс сайта будет соответствовать современным требованиям и отвечать ожиданиям целевой аудитории. Опытные специалисты UC Coding создадут UX-дизайн, отталкиваясь от данных анализа пользовательского поведения, что позволит в несколько раз увеличить конверсию. Мы подберем оптимальные цветовые сочетания (основной, дополнительные, акцентные цвета), уделим внимание четкости графики, наглядности интерфейса, понятной и лаконичной визуализации.",
  },
  {
    id: 3,
    title: "Профессиональная верстка",
    info: "Наши специалисты напишут чистый код с двухфакторной проверкой, позволяющий обеспечить высокую скорость загрузки на любых браузерах и электронных устройствах (десктопных и мобильных). Профессиональная адаптивная верстка является важным условием бесперебойной надежной работы сайта на протяжении длительного времени.",
  },
  {
    id: 4,
    title: "Тестирование и доработка",
    info: "Чтобы избежать проблем во время использования сайта, на данном этапе мы отрабатываем все возможные сценарии взаимодействия пользователей с сайтом. Это позволяет вовремя выявить ошибки и устранить их. Мы тестируем usability и безопасность сайта, проверяем скорость загрузки страниц, работу форм обратной связи и интерактивных элементов, отображение страниц на разных устройствах. Это позволяет на 100% гарантировать функциональность ресурса.",
  },
  {
    id: 5,
    title: "Запуск сайта",
    info: "Когда все проверено и выполнены все нужные доработки, остается лишь выполнить грамотный запуск сайта. Наши специалисты сверяют всё по чек-листу, чтобы избежать неприятностей и получить на выходе идеальный интернет-магазин с высокой конверсией. Сайт от профессионалов UC Coding позволит вам легко привлекать новых клиентов и станет достойным лицом вашей компании в интернете.",
  },
];

const Services = () => {
  const [stepId, setStepId] = useState(1);

  return (
    <section className="mt-[140px] mb-28">
      <div className="main-container">
        <h1 className=" mb-3 text-2xl font-bold text-ink">Этапы</h1>
        <div className="items-center lg:flex">
          <ul className="steps steps-vertical hidden lg:block lg:w-2/5">
            {step.map((st) => (
              <li
                className={`step cursor-pointer bg-white font-semibold ${
                  stepId >= st.id ? "step-primary" : ""
                } ${stepId === st.id ? "text-inkLight" : "text-ink"}`}
                key={st.id}
                onClick={() => setStepId(st.id)}
              >
                {st.text}
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center justify-around lg:hidden">
            {step.map((st) => (
              <li
                className={`mb-4 cursor-pointer ${
                  stepId === st.id ? "bg-inkLight" : "bg-ink"
                } rounded-md px-3 py-2 text-white`}
                key={st.id}
                onClick={() => setStepId(st.id)}
              >
                {st.text}
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {stepValue
              .filter((item) => item.id === stepId)
              .map((value, i) => (
                <div
                  key={i}
                  className="mx-auto mt-14 w-full rounded-[10px] px-11 py-5 lg:w-[70%] 2xl:h-[390px]"
                  style={{
                    boxShadow: "0px 10px 60px rgba(42, 35, 103, 0.15)",
                  }}
                >
                  <div className="flex items-center lg:w-3/5">
                    <div className="mr-5 flex h-[53px] w-[53px] items-center justify-center rounded-full bg-[#43CD93] text-2xl font-bold text-white">
                      {value.id}
                    </div>
                    <h1 className="w-4/5 text-sm font-bold text-ink md:text-lg lg:whitespace-nowrap lg:text-2xl ">
                      {value.title}
                    </h1>
                  </div>
                  <div className="my-[29px] h-[1px] w-full bg-[#EBEBEB]"></div>
                  <p className="text-sm lg:text-lg">{value.info}</p>
                </div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
