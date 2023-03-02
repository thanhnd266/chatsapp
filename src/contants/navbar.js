import { FileAddOutlined, HomeOutlined, MessageOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";


export const navbarItems = [
    {
        label: "Home",
        key: "/",
        icon: <HomeOutlined />,
        children: null,
    },
    {
        label: "Community",
        key: "/community",
        icon: <TeamOutlined />,
        children: null,
    },
    {
        label: "Messenger",
        key: "/messenger",
        icon: <MessageOutlined />,
        children: null,
    },
    {
        label: "User",
        key: "/user",
        icon: <UserOutlined />,
        children: null,
    },
    {
        label: "Files",
        key: "/files",
        icon: <FileAddOutlined />,
        children: null,
    },
]