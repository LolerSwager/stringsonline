import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.header`
    nav {
        ul {
            
        }
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Forside</li>
                    </Link>
                    <Link>
                        <li>Salgs- og handelbetingelser</li>
                    </Link>
                    <Link>
                        <li>Login</li>
                    </Link>
                </ul>
            </nav>
        </StyledHeader>
    )
}
