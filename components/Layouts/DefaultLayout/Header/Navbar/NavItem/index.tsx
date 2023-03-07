import type { MouseEventHandler } from "react";
import Link from "next/link";
import {useRouter} from "next/router";

interface INavItemProps extends React.PropsWithChildren {
  title: string;
  url?: string;
  onClick?: MouseEventHandler;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({
  title,
  url,
  onClick
}): JSX.Element => {
  // const navLinks = [
  //   {title, path: url}
  // ]
  const router = useRouter();

  return (
    <li className="cursor-pointer text-xl font-bold uppercase text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover text-[0.875rem]"
    onClick={onClick}
    >
      <Link
        href={`${url}`}
        className={`text-[0.875rem] font-display font-medium ${router.pathname === url ? "h-full w-full rounded-b-md text-light-hover dark:text-dark-hover": undefined}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;

{/*    {({ isActive }) =>*/}
{/*  isActive*/}
{/*    ? "h-full w-full rounded-b-md text-light-hover dark:text-dark-hover"*/}
{/*    : undefined*/}
{/*}*/}