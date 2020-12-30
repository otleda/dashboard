import styled from 'styled-components';
import  Switch, { ReactSwitchProps } from 'react-switch';

 export const Container = styled.div`
    display: flex;
    align-items: center;
 `;
 export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
    font-weight: lighter;
 `;
 export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
     ({ theme }) => ({
        onColor: theme.colors.darkCheked,
        offColor: theme.colors.lightCheked,
        activeBoxShadow: false,
        height: 14,
        handleDiameter: 24,
     })
 )<ReactSwitchProps>`
    width: 100%;
    margin: 0 10px;
 `;
