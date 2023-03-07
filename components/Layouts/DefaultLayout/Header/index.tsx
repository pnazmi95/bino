import Navbar from "./Navbar";

interface IHeaderProps extends React.PropsWithChildren {}

const Header: React.FunctionComponent<IHeaderProps> = (props): JSX.Element => {
  return (
    <div>
      {/*<header className="flex h-16 items-center justify-center bg-light-primary dark:bg-dark-primary">*/}
      {/*</header>*/}
       <Navbar />
    </div>
  );
};

export default Header;
