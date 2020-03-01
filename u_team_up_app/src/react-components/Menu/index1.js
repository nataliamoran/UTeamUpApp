import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

export default function AppMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (props.loginStatus === 'admin') {
        const links = 
                    [<Link to={"/adminDashboard"}>
                         <MenuItem>Admin Dashboard</MenuItem>
                     </Link>,
                    ];
    } else if (props.loginStatus === 'user') {
        const links = 
                    [<Link to='/student-profile'>
                         <MenuItem>your profile</MenuItem>
                     </Link>,
                     <Link to='/inbox'>
                         <MenuItem>message box</MenuItem>
                     </Link>,
                     <Link to={"/"}>
                         <MenuItem>search teams</MenuItem>
                     </Link>,
                     <Link to={"/search-student"}>
                         <MenuItem>search students</MenuItem>
                     </Link>,
                     <Link to={"/appointments"}>
                         <MenuItem>your appointments</MenuItem>
                     </Link>,
                     <Link to='/logout'>
                         <MenuItem>Log out</MenuItem>
                     </Link>,
                    ]
    } else {
        const links = 
                    [
                     <Link to='/login'>
                         <MenuItem>Log in</MenuItem>
                     </Link>,
                     <Link to='/signup'>
                         <MenuItem>Sign up</MenuItem>
                     </Link>
                    ] 
    }

    return (
            <div className="main_menu">
                <Button className="main_menu_button" aria-controls="simple-menu" aria-haspopup="true"
                        onClick={handleClick}>
                    menu
                </Button>
                <Menu
                    className="main_menu_content"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {   
                        props.loginStatus === 'admin' ?
                            [<Link to={"/adminDashboard"}>
                                 <MenuItem>Admin Dashboard</MenuItem>
                             </Link>,
                            ] :
                        props.loginStatus === 'guest' ?
                            [<Link to='/login'>
                                <MenuItem>Log in</MenuItem>
                             </Link>,
                             <Link to='/signup'>
                                 <MenuItem>Sign up</MenuItem>
                             </Link>
                            ] :
                        props.loginStatus === 'user' ?
                            [<Link to='/student-profile'>
                                 <MenuItem>your profile</MenuItem>
                             </Link>,
                            <Link to='/inbox'>
                                 <MenuItem>message box</MenuItem>
                             </Link>,
                             <Link to={"/"}>
                                 <MenuItem>search teams</MenuItem>
                             </Link>,
                             <Link to={"/search-student"}>
                                 <MenuItem>search students</MenuItem>
                             </Link>,
                             <Link to={"/appointments"}>
                                 <MenuItem>your appointments</MenuItem>
                             </Link>,
                             <Link to='/logout'>
                                 <MenuItem>Log out</MenuItem>
                             </Link>,
                            ] :
                    }
                </Menu>
            </div>
    );
}