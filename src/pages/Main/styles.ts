import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    padding:71px 29px 0 29px;
    background-color:#FEFEFE;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Welcome = styled.View``;

export const SalutationText = styled.Text`
    font-family: 'Ubuntu_400Regular';
    color:#34495E;
    font-size:23px;
`;

export const UserName = styled.Text`
    font-family: 'Ubuntu_700Bold';
    color:#34495E;
    font-size:25px;
    margin-top:9px;
`;

export const ButtonFilter = styled.TouchableOpacity``;

export const ContentPrevention = styled.TouchableOpacity`
    margin-top: 37px;
    width:100%;
    height:100px;
    background-color:#CFD7EC;
    border-radius: 10px;
    padding: 34px 22px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContentPreventionText = styled.Text`
    width:191px;
    font-family: 'Ubuntu_700Bold';
    color:#443F70;
`;

export const WorldCasesContent = styled.View`
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

export const BoxTypeCases = styled.ScrollView`
    margin-top:35px;
`;

export const BoxTypeCaseItem = styled.View`
    width:127px;
    height:65px;
    margin-right:20px;
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



