/* eslint-disable prettier/prettier */

import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <div className="logo">
                
            </div>
            <nav>
                <a href="/">timer</a>
                <a href="/">history</a>
            </nav>
        </HeaderContainer>
    );
}