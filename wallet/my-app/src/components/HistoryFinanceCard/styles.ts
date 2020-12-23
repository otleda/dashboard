import styled from 'styled-components';

interface IContainerProps {
    color: string;
}
interface ITagProps {
    color: string;
}

export const Container = styled.li< IContainerProps > `
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 1em;
    margin-bottom: 1em;
    height: 80px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props =>props.color};
    transition: all .2s;
    opacity: .9;

    &:hover {
        opacity: 1;
        transform: translateY(-3px);
        box-shadow: 0px 10px 10px rgba(0,0,0,.1);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 1em;
    }
`;
export const Tag = styled.div< ITagProps > `
    position: absolute;
    width: 15px;
    height: 60%;
    left: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    background: ${props => props.color};
`; 