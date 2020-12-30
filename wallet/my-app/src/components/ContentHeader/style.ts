import styled from 'styled-components';

interface ITitleContainerProps{
    colorLine: string;
}

export const Container = styled.div`
    display: flex;                                                                                                                                              
    justify-content: space-between;
    width: 100%;
`;
export const TitleContainer = styled.div< ITitleContainerProps >`
    > h1 {
        color: ${ props => props.theme.colors.white};

        &::after {
            content: '';
            display: block;
            width: 60%;
            margin-left: 40%;
            border-bottom: 8px solid ${props => props.colorLine};

        }
    }
`;
export const Controllers = styled.div`
    display: flex;
`;
