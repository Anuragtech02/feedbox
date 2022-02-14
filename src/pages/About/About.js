import styles from "./About.module.scss";
import { Banner } from "../../components";
import bannerImg from "../../assets/about-bg.jpg";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

const About = () => {
  return (
    <BaseLayout classNames={[styles.container]}>
      <Banner title="About Us" image={bannerImg} />
      <main>About us would come here</main>
    </BaseLayout>
  );
};

export default About;
