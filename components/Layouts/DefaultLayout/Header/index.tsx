import Navbar from "./Navbar";

interface IHeaderProps extends React.PropsWithChildren {}

const Header: React.FunctionComponent<IHeaderProps> = (props): JSX.Element => {
  return (
       <Navbar />
  );
};

export default Header;
