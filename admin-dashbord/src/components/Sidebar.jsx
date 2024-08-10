import {
  UserOutlined,
  ProfileOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Flex, Menu } from "antd";
import { FaLeaf } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashbord",
          },
          {
            key: "2",
            icon: <CarryOutOutlined />,
            label: "My Order",
          },
          {
            key: "3",
            icon: <OrderedListOutlined />,
            label: "Todo",
          },
          {
            key: "4",
            icon: <ProfileOutlined />,
            label: "Profile",
          },
          {
            key: "5",
            icon: <SettingOutlined />,
            label: "Profile",
          },
          {
            key: "6",
            icon: <LogoutOutlined />,
            label: "Profile",
          },
        ]}
      />
    </>
  );
}

export default Sidebar;
