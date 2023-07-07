import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-[#f7f7f7]">{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;
