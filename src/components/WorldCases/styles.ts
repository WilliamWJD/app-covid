import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 35px;
`;

export const WorldCaseTitle = styled.Text`
    font-family: 'Ubuntu_400Regular';
    color: #34495E;
    font-size: 18px;
`;

export const WorldCaseImage = styled.Image`
    margin-top: 18px;
`;

export const BoxTypeCases = styled.View`
    width: 100%;
    margin-top:35px;
    flex-direction: row;
    justify-content: space-between;
`;

export const BoxTypeCaseItem = styled.View`
    width:48%;
    height:65px;
    background-color: #5C6FAD;
    border-radius: 5px;

    justify-content:center;
`;

export const BoxTypeCaseItemTitle = styled.Text`
    font-family: 'Ubuntu_400Regular';
    color:#fff;
    font-size: 12px;
    padding: 0 10px 0 10px;
`;

export const BoxTypeCaseItemValue = styled.Text`
    margin-top: 6px;
    font-family: 'Ubuntu_700Bold';
    color: #fff;
    font-size:15px;
    margin-left:10px;
`;
