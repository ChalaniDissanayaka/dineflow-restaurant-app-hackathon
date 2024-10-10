import './AdminLayout.css';
import AdminNavbar from './AdminNavbar';

function AdminLayout({ children }) {
    return (
        <div className="layout-container">
            <AdminNavbar />
            {children}
        </div>
    );
}

export default AdminLayout;