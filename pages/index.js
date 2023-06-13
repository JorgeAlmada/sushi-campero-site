import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import ImageSlider from "../components/image-slider";
import MenuComponent from "../components/menu";
import PromocionesComponent from "../components/promociones";
import FooterComponent from "../components/footer";
import SucursalesComponent from "../components/sucursales";

export default function Home() {
  return (
    <div className={styles.container + " bg-primary"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ImageSlider />
      <MenuComponent />
      <PromocionesComponent />
      <SucursalesComponent />
      <FooterComponent />
    </div>
  );
}
