import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const { Content, Footer } = Layout;

const HomeLayout = () => {
    return (
        <Layout rootClassName="bg-black">
            <div className="mx-auto w-full max-w-[1200px] bg-black !p-0">
                <Navigation />
                <Content className="mx-auto mt-36 w-[1120px]">
                    <div className="bg-black font-sans text-white">
                        <Outlet />
                    </div>
                </Content>
                <Footer className="bg-black text-center text-xl text-white">
                    Designed and Developed Roshan Maharjan
                </Footer>
            </div>
        </Layout>
    );
};

export default HomeLayout;
