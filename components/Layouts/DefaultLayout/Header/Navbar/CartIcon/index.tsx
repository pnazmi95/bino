import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import Badge from "../../../../../Base/Badge";
import Link from "next/link";
import {useRouter} from "next/router";

interface ICartIconProps extends React.PropsWithChildren {
    url: string,
}

const CartIcon: React.FunctionComponent<ICartIconProps> = (
    {url}
): JSX.Element => {
    const router = useRouter()
    return (
        <div
            className="relative cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
            <Link
                href="/cart"
                className={`${router.pathname === url ? "h-full w-full rounded-b-md text-light-hover dark:text-dark-hover" : undefined}`}
            >
                <FontAwesomeIcon icon={faCartPlus}/>
                <Badge value={2}/>
            </Link>
        </div>
    );
};

export default CartIcon;