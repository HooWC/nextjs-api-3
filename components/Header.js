// components/Header.js
import Link from 'next/link';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
