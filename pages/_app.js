import Layout from "@/Layout/Layout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>

  )

}
