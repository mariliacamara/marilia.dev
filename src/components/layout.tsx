import Navbar from './navbar'
import Footer from './footer'

const Layout: any = ({ children }: any) => {
  return (
    <>
      <Navbar name="<maríliacâmara />" />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;