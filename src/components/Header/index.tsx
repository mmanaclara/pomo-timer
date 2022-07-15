/* eslint-disable prettier/prettier */
import { HeaderContainer, LogoContainer } from './styles';
import logoIgnite from '../../assets/logo-ignite.svg';
import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={logoIgnite} alt="" />
                <h2>pomo timer</h2>
            </LogoContainer>
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title='Histórico'>
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}