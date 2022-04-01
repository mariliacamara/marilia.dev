const Footer = () => {
  const date = new Date();
  let currentYear = date.getFullYear();

  return (
    <>
      <footer>&copy; { currentYear }, todos os direitos reservados</footer>
    </>
  )
}

export default Footer;