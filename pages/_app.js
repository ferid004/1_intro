import Layout from "@/Layout/Layout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const useLayout = Component.useLayout || ((page)=><Layout>{page}</Layout>)
  
  return (

    <>
    {
      useLayout(
        <Component {...pageProps} />
      )
    }
    </>

  )

}
