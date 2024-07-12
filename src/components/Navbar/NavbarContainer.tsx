import Container from "../ui/Container";
import NavbarCart from "./NavbarCart";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";

const NavbarContainer = () => {
  return (
    <nav className="bg-kbd-primary py-2.5">
      <Container className="flex items-center justify-between">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarCart />
      </Container>
    </nav>
  );
};

export default NavbarContainer;
