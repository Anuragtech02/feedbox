import React from "react";
import styles from "./Categories.module.scss";
import categoryImg1 from "../../../assets/categories/branding.png";
import categoryImg2 from "../../../assets/categories/packaging.jpg";
import clsx from "clsx";

const Categories = () => {
  const data = [
    {
      title: "Branding",
      image: categoryImg1,
    },
    {
      title: "Packaging",
      image: categoryImg2,
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((item, i) => (
        <CategoryItem
          key={i}
          item={item}
          cls={i % 2 ? styles.itemRight : styles.itemLeft}
        />
      ))}
    </div>
  );
};

export default Categories;

const CategoryItem = ({ item, cls }) => {
  return (
    <div className={clsx(styles.categoryItem, cls)}>
      <img src={item.image} alt={item.title} />
    </div>
  );
};
