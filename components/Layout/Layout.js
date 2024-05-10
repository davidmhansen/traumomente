import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Banner></Banner>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
