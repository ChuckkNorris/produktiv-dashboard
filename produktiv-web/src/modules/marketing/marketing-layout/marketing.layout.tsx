import { AppBar, Button } from "@mui/material"
import { Link, NavLink, Outlet } from "react-router"


export const MarketingLayout = () => {
  return (
    <>
    <AppBar>
      <NavLink to="/">{({isActive}) => (<Button color={isActive ? 'info' : 'warning'}>Home</Button>)}</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </AppBar>
    <Outlet />
    </>
  )
}

export default MarketingLayout;
