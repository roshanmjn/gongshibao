import { Layout, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

const { Header } = Layout;

const navList: {
    key: string;
    label: string;
    path: string;
}[] = [
    {
        key: "1",
        label: "Home",
        path: "/",
    },
    {
        key: "2",
        label: "Projects",
        path: "/projects",
    },
];

export default () => {
    // const [drawerVisible, setDrawerVisible] = useState(false);
    // const showDrawer = () => {
    //     setDrawerVisible(true);
    // };

    // const closeDrawer = () => {
    //     setDrawerVisible(false);
    // };
    return (
        <Header
            style={{
                position: "fixed",
                width: "1200px",
                height: "73px",
                zIndex: 99,
                padding: 0,
                backgroundColor: "black",
                borderBottom: "1px solid #333",
            }}
        >
            <div className="flex h-full w-full items-center justify-between px-6">
                {/* Mobile Hamburger Button */}
                <Button type="primary" icon={<MenuOutlined />} className="block sm:hidden" />

                {/* Desktop Menu */}
                <nav className="hidden w-full items-center justify-between sm:flex">
                    {/* Logo */}
                    <Link to="/" className="text-2xl text-white">
                        RM
                    </Link>
                    {/* Nav Items */}
                    <div className="flex pr-6 text-lg text-white">
                        {navList.map((item, idx) => (
                            <NavLink
                                to={item.path}
                                key={idx}
                                className="rounded-md px-4 py-2 transition duration-200 hover:bg-blue-500 hover:text-white"
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            </div>
        </Header>
    );
};
