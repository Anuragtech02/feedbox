import React from "react";
import styles from "./Portfolio.module.scss";
import { Banner } from "../../components";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { portfolioData } from "../../utils/portfolioData";

const Portfolio = () => {
  return (
    <BaseLayout classNames={[styles.container]}>
      <Banner
        title="Portfolio"
        image="https://blomma.qodeinteractive.com/wp-content/uploads/2018/08/shop-title-img.jpg"
      />
      <section className={styles.portfolio}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1rem">
            {portfolioData?.map((item) => (
              <article className={styles.portfolioItem}>
                <img src={item?.src} alt={item?.title} />
                <div className={styles.content}>
                  <h3>{item?.title}</h3>
                </div>
              </article>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </BaseLayout>
  );
};

export default Portfolio;
