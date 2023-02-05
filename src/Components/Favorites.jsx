import styled from "styled-components"
import { useGetList } from "../Hooks/useGetList"

const StyledFavorites = styled.article`
    h2 {
        color: #afafaf;
    }
`

export default function Favorites() {
    const { state: Favorites } = useGetList("productgroups", "items")
    return (
        <StyledFavorites>
            <h2>
                Kundernes <b>favoritter</b>
            </h2>
            <section>
                {/* {Favorites.map((items) => (
                    <div key={items.id}>
                        <h4>{items.title}</h4>
                    </div>
                ))} */}
            </section>
        </StyledFavorites>
    )
}

/*  <div key={item.id}>
                        <img src={item.image} alt={item.image} />
                        <h4>{item.title}</h4>
                        <p>{item.teaser}</p>
                    </div> */
