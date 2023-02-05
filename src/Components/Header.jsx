import { Link } from "react-router-dom"
import styled from "styled-components"
import mailIcon from "../Assets/images/mail-icon.png"
import phoneIcon from "../Assets/images/phone-icon.png"
import CartIcon from "../Assets/images/cart-icon.png"

const StyledHeader = styled.header`
    grid-area: header;
    nav {
        ul {
            display: flex;
            a {
                color: #ffffff;
            }
        }
        div {
            div {
                color: #ffffff;
            }
        }
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <img src="" alt="" />
                <ul>
                    <Link to="/">
                        <li>Forside</li>
                    </Link>
                    <Link to="/">
                        <li>Salgs- og handelbetingelser</li>
                    </Link>
                    <Link to="/">
                        <li>Login</li>
                    </Link>
                </ul>
                <div>
                    <div>
                        <img src={mailIcon} alt="icon" />
                        <img src={phoneIcon} alt="icon" />
                        <img src={CartIcon} alt="icon" />
                    </div>
                    <div>
                        <input type="text" placeholder="indtast søgeord" />
                        <button>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </StyledHeader>
    )
}
