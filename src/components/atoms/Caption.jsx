import styled from "styled-components";

function Caption({msn}) {
    return ( 
        <StyledCaption>{msn}</StyledCaption>
     );
}

const StyledCaption = styled.h2`
    color: white;
    margin-bottom: 2.5rem;
    font-family: 'Hepta Slab';
    font-size: 2rem;
`

export default Caption;