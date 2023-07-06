import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import BookIcon from '@mui/icons-material/Book';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
import { useNavigate } from "react-router-dom"
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const icons = [
  {
    title: "Blogs",
    icon: <BookIcon />,
    url: "/blog/",
  },
  {
    title: "My Blogs",
    icon: <LibraryBooksIcon />,
    url: "/blog/myblog/",
  },
  {
    title: "New Blog",
    icon: <DriveFileRenameOutlineIcon />,
    url: "/blog/newblog/",
  },
  {
    title: "Favorites",
    icon: <FavoriteIcon />,
    url: "/blog/favorite/",
  },
  {
    title: "Followers",
    icon: <GroupsIcon />,
    url: "/blog/followers/",
  },
  {
    title: "Followed",
    icon: <FollowTheSignsIcon />,
    url: "/blog/followed/",
  },
  {
    title: "Admin Panel",
    icon: <SupervisorAccountIcon />,
    url: "https://32155.fullstack.clarusway.com/admin",
  },
]

const iconStyle = {
  color: "white",
  "& .MuiSvgIcon-root": { color: "white" },
  "&:hover": { color: "red" },
  "&:hover .MuiSvgIcon-root": { color: "red" },
}

const MenuListItems = () => {
  const navigate = useNavigate()
  return (
    <div>
      <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.url.includes("http") && (
              <ListItemButton to={item.url} sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
            {!item.url.includes("http") && (
              <ListItemButton onClick={() => navigate(item.url)} sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MenuListItems
