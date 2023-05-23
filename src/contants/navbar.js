import { FileAddOutlined, HomeOutlined, MessageOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const currentUser = JSON.parse(localStorage.getItem("userData"));

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
        key: `/user/${currentUser._id}`,
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