import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReferenceCard from "./ReferenceCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./References.module.css";
import references from "../../data/references.json";
import iris from "../../assets/references/irisSlide1.png";
import bhotel from "../../assets/references/bhotelSlide2.png";
import atu from "../../assets/references/atuSlide4.png";
import pschool from "../../assets/references/pschoolSlide3.png";
import isay from "../../assets/references/isay.png";
import blaine from "../../assets/references/blaine.png";
import padraig from "../../assets/references/padraig.png";

function References() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>References</h2>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        activ
      >
        {references.map((reference, id) => {
          return (
            <SwiperSlide key={id} className={styles["swiper-slide"]}>
              <ReferenceCard reference={reference} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default References;
