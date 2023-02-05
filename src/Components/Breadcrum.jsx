import styled from "styled-components"

const StyledBreadcrum = styled.div`
    grid-area: breadcrum;
    background-color: yellow;
    hr {
        border: 0px;
        height: 1px;
        width: 100%;
        background-color: #00f9b6;
    }
    i {
        color: #00f9b6;
    }
    p {
        color: #00f9b6;
        display: inline;
    }
`

export default function Breadcrum() {
    return (
        <StyledBreadcrum>
            <hr />
            <i class="fa-solid fa-house"></i> <p>Forside</p>
            <hr />
        </StyledBreadcrum>
    )
}
