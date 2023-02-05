import styled from "styled-components"

const StyledMenu = styled.aside`
    grid-area: aside;
    background-color: steelblue;
    menu {
        background-color: #0a1d1c;
        border: 1px solid #1f5e5b;
        width: 183px;
        min-height: 498px;
        ul {
            margin: 1rem 0 0 23px;
            color: #00f9b6;
            font-size: 24px;
        }
    }
`

export default function Menu() {
    return (
        <StyledMenu>
            <menu>
                <ul>Guitarer</ul>
                <ul>Basser</ul>
                <ul>Handmade</ul>
                <ul>Trommer</ul>
                <ul>Percussion</ul>
                <ul>Stryg & Blæs</ul>
                <ul>Brands</ul>
            </menu>
        </StyledMenu>
    )
}
