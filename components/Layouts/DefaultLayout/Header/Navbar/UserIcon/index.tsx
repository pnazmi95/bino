import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import Badge from "../../../../../Base/Badge";
import Link from "next/link";
import {useRouter} from "next/router";

interface IUserIconProps extends React.PropsWithChildren {
    url: string,
}

const UserIcon: React.FunctionComponent<IUserIconProps> = (
    {url}
): JSX.Element => {
    const router = useRouter()
    return (
        <div
            className="relative cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
            <Link
                href="/account/login"
                className={`${router.pathname === url ? "h-full w-full rounded-b-md text-light-hover dark:text-dark-hover" : undefined}`}
            >
                <FontAwesomeIcon icon={faUser}/>
                <Badge value={12}/>
            </Link>
        </div>
    );
};

export default UserIcon;

