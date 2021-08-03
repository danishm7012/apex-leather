import "../styles/style.scss";
import "../styles/model.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import Layout from "../components/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
