import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: 'Harmattan';
    font-size: 1.4rem;
    color: #B8DCFF;
    margin-bottom: -6px;
`;


function Label( {msn} ) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
     );
}

export default Label;