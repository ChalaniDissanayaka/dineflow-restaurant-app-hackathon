import { useState } from "react";
import { Avatar, Button, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../config";
import { useGlobal } from "../../GlobalContext";
import "./AdminNavbar.css"; // Create this file if it doesn't exist

function AdminNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, setUser } = useGlobal();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        await axios.post(`${api}/auth/logout`, {}, { withCredentials: true });
        setUser(null);
        navigate("/");
    };

    return (
        <div className="admin-navbar">
        {/* Header Row */}
        <div className="admin-navbar-header">
            <h2>Admin Dashboard</h2>
            <div className="admin-navbar-mobile-icon">
                <IconButton
                    icon={<HamburgerIcon w={7} h={7} />}
                    colorScheme="white"
                    variant="solid"
                    onClick={toggleMenu}
                    aria-label="Open Menu"
                />
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="admin-navbar-buttons">
            {user && (
                <div className="admin-navbar-avatar">
                    <Avatar size="sm" name={user.email} />
                    {user.email}
                </div>
            )}
            <Button colorScheme="red" variant="solid" onClick={handleLogout}>
                Logout
            </Button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <div className="admin-navbar-mobile-menu">
                {user && (
                    <div className="admin-navbar-avatar">
                        <Avatar size="sm" name={user.email} />
                        {user.email}
                    </div>
                )}
                <Button colorScheme="red" variant="solid" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        )}
    </div>
    );
}

export default AdminNavbar;