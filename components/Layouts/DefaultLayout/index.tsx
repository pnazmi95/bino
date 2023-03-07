import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface IDefaultLayoutProps extends React.PropsWithChildren {
    title: string;
}

const DefaultLayout: React.FunctionComponent<IDefaultLayoutProps> = ({children, title}): JSX.Element => {
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <div className="flex min-h-screen flex-col justify-between overflow-hidden font-display">
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>   
        </>
    );
};

export default DefaultLayout;