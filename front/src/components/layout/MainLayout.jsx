import Header from '../header/Header';
import Footer from '../footer/Footer';
import "./MainLayout.css"

const MainLayout = ({ children }) => (
    <>
        <header>
          <Header/>
        </header>
        <main>{children}</main>
        <footer>
            <Footer/>
        </footer>
    </>
)
export default MainLayout;