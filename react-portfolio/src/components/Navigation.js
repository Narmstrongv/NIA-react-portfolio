import React from "react";

function Navigation() {
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href ="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;