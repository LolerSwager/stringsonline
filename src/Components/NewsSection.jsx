import styled from "styled-components"

const StyledNewsSection = styled.section`
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

export default function NewsSection() {
    return (
        <StyledNewsSection>
            <h2>som image</h2>
        </StyledNewsSection>
    )
}
