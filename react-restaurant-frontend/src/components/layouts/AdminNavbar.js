import { Button } from "@chakra-ui/react";

function AdminNavbar() {

    const handleLogout = () => {

    }

    return (
        <div className="admin-navbar">
            <h2>Admin Dashboard</h2>
            <div className="admin-navbar-buttons">
                <Button colorScheme="red" variant="solid" noClick={handleLogout} >
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default AdminNavbar;