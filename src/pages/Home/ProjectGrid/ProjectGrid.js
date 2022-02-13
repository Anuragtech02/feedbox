import React from "react";
import styles from "./ProjectGrid.module.scss";
import { Grid } from "@mui/material";
import projectImg1 from "../../../assets/projectGrid/port-1-img-1.jpg";
import projectImg2 from "../../../assets/projectGrid/port-1-img-2.jpg";
import projectImg3 from "../../../assets/projectGrid/port-1-img-3.jpg";

const ProjectGrid = ({ data }) => {
  // const data = [
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg1,
  //   },
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg2,
  //   },
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg3,
  //   },
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg1,
  //   },
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg2,
  //   },
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg3,
  //   },
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg1,
  //   },
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg2,
  //   },
  //   {
  //     title: "Be Creative!",
  //     category: "Creative",
  //     image: projectImg3,
  //   },
  // ];

  return (
    <div className={styles.container}>
      <Grid container spacing={0}>
        {data?.map((item) => (
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectGrid;

const ProjectCard = ({ item }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.overlay}></div>
      <img src={item.image} alt={item.title} />
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
