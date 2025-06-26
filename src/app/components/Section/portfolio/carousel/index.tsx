// import leonardo from "/images/leonardo.webp";
import lixozero from "/assets/images/lixo-zero.webp";
import fuvir from "/assets/images/fuvir.webp";
import quindim from "/assets/images/quindim.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.sass";

interface ListItem {
  title: string;
  content: string;
  image: string;
  link: string;
}

const list: ListItem[] = [
  {
    title: "Quindim",
    content: "Acessoria de TI e suporte e desenvolvimento de site",
    link: "https://www.institutoquindim.com.br/",
    image: "/assets/images/quindim.webp",
  },
  {
    title: "Instituo Lixo Zero - Caxias do Sul",
    content:
      "Sistema Web de Gerenciamento de Cadastros para a Semana Lixo Zero - Caxias do Sul.",
    image: "/assets/images/lixo-zero.webp",
    link: "https://lixozerocaxias.vercel.app/",
  },
  {
    title: "Fuvir - Rede social",
    content: "Rede social onde foi desenvolvida UI/UX design e front end.",
    image: "/assets/images/fuvir.webp",
    link: "https://fuvir.com/index.php?link1=welcome",
  },
];

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="Swiper"
      >
        {list.map((item, index) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#4446AE",
            }}
            key={item.title}
          >
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <img
                className="object-fit"
                src={item.image}
                alt={`Slide ${index + 1}`}
                width={200}
                height={200}
              />

              <div className="flex flex-col gap-3">
                <a
                  href={item.link}
                  className="linear_grey_1 lg:text-lg hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>{item.title}</b>
                </a>
                <p className="text-grey_1 lg:text-lg w-[290px]">
                  {item.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
