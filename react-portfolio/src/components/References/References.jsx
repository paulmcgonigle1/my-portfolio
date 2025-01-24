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

function References() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>References - in progress</h2>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        breakpoints={{
          1000: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
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
