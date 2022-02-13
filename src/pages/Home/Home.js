import React, { useLayoutEffect, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import { Grid } from "@mui/material";
import thumbImage from "../../assets/home/h1-img-1.png";
import { Button } from "../../components";
import Lottie from "react-lottie";
import axios from "axios";

import animationData from "../../assets/home/blob-yellow.json";
import animationDataBlue from "../../assets/home/blue-bob.json";
import animationDataDarkBlue from "../../assets/home/dark-blue-bob.json";
import animationDataRed from "../../assets/home/red-blob.json";
import animationDataBottomBlue from "../../assets/home/bottom-blue-blob.json";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import ProjectGrid from "./ProjectGrid/ProjectGrid";
import Categories from "./Categories/Categories";
import Testimonials from "./Testimonials/Testimonials";
import { keywordsData } from "../../utils/keywordsData";

const Home = () => {
  // const [blobDim, setBlobDim] = useState({ width: "800px", height: "800px" });

  // useEffect(() => {
  //     if (window.innerWidth <= 600) {
  //       setBlobDim({ width: "600px", height: "600px" });
  //     } else {
  //       setBlobDim({ width: "800px", height: "800px" });
  //     }

  // }, []);

  // useLayoutEffect(() => {
  //   const changeDime = () => {
  //     if (window.innerWidth <= 600) {
  //       setBlobDim({ width: "600px", height: "600px" });
  //     } else {
  //       setBlobDim({ width: "800px", height: "800px" });
  //     }
  //   };
  //   document.addEventListener("resize", changeDime);

  //   return () => document.removeEventListener("resize", changeDime);
  // }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000").then((res) => {
      console.log({ res });
      setData(res.data);
    });
  }, []);

  return (
    <BaseLayout classNames={[styles.container]}>
      <div className={styles.homeContainer}>
        <div className={styles.blobs}>
          <div className={styles.yellowBlob}>
            <Lottie
              options={lottieOptions(animationData)}
              height="700px"
              width="700px"
              // isStopped={this.state.isStopped}
              // isPaused={this.state.isPaused}
            />
          </div>
          <div className={styles.darkBlueBlob}>
            <Lottie
              options={lottieOptions(animationDataDarkBlue)}
              height="400px"
              width="400px"
              // isStopped={this.state.isStopped}
              // isPaused={this.state.isPaused}
            />
          </div>
          <div className={styles.blueBob}>
            <Lottie
              options={lottieOptions(animationDataBlue)}
              height="800px"
              width="800px"
              // isStopped={this.state.isStopped}
              // isPaused={this.state.isPaused}
            />
          </div>
        </div>
        <div className={styles.homeContent}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <div className={styles.content}>
                <h1>
                  Creative <br />
                  agency
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button className={styles.readMoreBtn}>Read More</Button>
              </div>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <div className={styles.media}>
                <img src={thumbImage} alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <FacebookIcon fontSize="small" />
        <TwitterIcon fontSize="small" />
        <YouTubeIcon fontSize="small" />
        <InstagramIcon fontSize="small" />
      </div>
      <section className={styles.projectGridContainer}>
        <ProjectGrid data={data} />
      </section>
      <div className={styles.keywords}>
        <Grid container spacing={2}>
          {keywordsData.map((keyword, i) => (
            <Grid key={i} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <div className={styles.keyword}>
                <div className={styles.imgContainer}>
                  <img
                    className={styles.normalImage}
                    src={keyword.image}
                    alt={"feedbox-" + keyword.title}
                  />
                  <img
                    className={styles.altImage}
                    src={keyword.altImage}
                    alt={"feedbox-" + keyword.title}
                  />
                </div>
                <h4>{keyword.title}</h4>
                <p>{keyword.desc}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <section className={styles.categoriesContainer}>
        <div className={styles.categoryBlobs}>
          <div className={styles.redBlob}>
            <Lottie
              options={lottieOptions(animationDataRed)}
              height="800px"
              width="800px"
              // isStopped={this.state.isStopped}
              // isPaused={this.state.isPaused}
            />
          </div>
          <div className={styles.blueBob}>
            <Lottie
              options={lottieOptions(animationDataBottomBlue)}
              height="800px"
              width="800px"
              // isStopped={this.state.isStopped}
              // isPaused={this.state.isPaused}
            />
          </div>
        </div>
        <Categories />
      </section>
      <section className={styles.testimonialsContainer}>
        <Testimonials />
      </section>
    </BaseLayout>
  );
};

export default Home;

const lottieOptions = (dataFile) => {
  return {
    loop: true,
    autoplay: true,
    animationData: dataFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};
