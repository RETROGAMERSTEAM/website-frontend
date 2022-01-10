import { Border, Li, StyledHeader, Ul, Title } from './style';
import { HomeIcon } from '@radix-ui/react-icons';
import { FaGamepad } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Header(){

    return (
        <StyledHeader>
            <Title>RETRO GAMERS</Title>
            <nav>
                <Ul>
                    <Li>
                        <Border>
                            <Link to='/'> <HomeIcon /> </Link>
                        </Border>      
                    </Li>

                    <Li>
                        <Border>
                            <Link to='/jogos'> <FaGamepad /> </Link>
                        </Border>
                    </Li>

                    <Li>
                        <Border>
                            <Link to='/emuladores'> <HomeIcon /> </Link>
                        </Border>
                    </Li>

                </Ul>
            </nav>
        </StyledHeader>
    )
}

export { Header }