import "../styles/style.scss";
import "../styles/model.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import Layout from "../components/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></Script>
        <Script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="MjExNzMwMDUtODJiZC00OWEzLWI5ZjEtMjhhMzA1ZTdkZmEyNjM3NjM4MjgxNjkzMzk3NDQx"
          id="snipcart"
        ></Script>
        <Script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="MjExNzMwMDUtODJiZC00OWEzLWI5ZjEtMjhhMzA1ZTdkZmEyNjM3NjM4MjgxNjkzMzk3NDQx"
          id="snipcart"
        ></Script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </div>
      <Layout>
        {/* <Head>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
          <script
            src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
            data-api-key="MjExNzMwMDUtODJiZC00OWEzLWI5ZjEtMjhhMzA1ZTdkZmEyNjM3NjM4MjgxNjkzMzk3NDQx"
            id="snipcart"
          ></script>
        </Head> */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
