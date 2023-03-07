import Navbar from "./Navbar";

interface IHeaderProps extends React.PropsWithChildren {}

const Header: React.FunctionComponent<IHeaderProps> = (props): JSX.Element => {
  return (
    <div>
       <Navbar />
    </div>
  );
};

export default Header;
