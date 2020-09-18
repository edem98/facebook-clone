import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
// state
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title={user?.displayName} src={user?.photoURL} Icon={""} />
      <SidebarRow
        title="Covid-19 Information Center"
        src=""
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Pages" src="" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" src="" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" src="" Icon={ChatIcon} />
      <SidebarRow title="Videos" src="" Icon={VideoLibraryIcon} />
      <SidebarRow title="Marketplace" src="" Icon={StorefrontIcon} />
      <SidebarRow title="Marketplace" src="" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default Sidebar;
