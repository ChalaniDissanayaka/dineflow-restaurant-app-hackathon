import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../components/Logo';
import './Home.css';
import MainMenu from '../components/MainMenu';
import Cart from '../components/Cart';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="home-container">
            <div className="home-nav">
                <Logo />
                <div className="menu-desktop">
                    <Link to="/login">
                        <Button colorScheme='teal' variant='solid' size='md'>Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button colorScheme='yellow' variant='solid'>Register</Button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="menu-mobile-icon">
                    <IconButton 
                        icon={<HamburgerIcon w={8} h={8} />} 
                        colorScheme='white'
                        variant="solid" 
                        onClick={toggleMenu} 
                        aria-label="Open Menu" 
                    />
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="menu-mobile">
                    <Link to="/login">
                        <Button colorScheme='teal' variant='solid' size='md'>Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button colorScheme='yellow' variant='solid'>Register</Button>
                    </Link>
                </div>
            )}

            <div className="home-inner-container">
                <MainMenu cartItems={cartItems} setCartItems={setCartItems} />
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </div>

        </div>    
    );
}

export default Home;