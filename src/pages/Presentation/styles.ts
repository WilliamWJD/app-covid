import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:#FEFEFE;
`;

export const HeaderContent = styled.View`
    height: 406px;
    background-color: #5C6FAD;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const ContentTitle = styled.View`
    width:249px;
    margin: 56px 0 0 44px;
`;

export const HeaderContentTitle = styled.Text`
    font-family: 'Ubuntu_700Bold';
    color: #fff;
    font-size: 35px;
`;

export const HeaderContentSubTitle = styled.Text`
    font-family: 'Ubuntu_400Regular';
    color: #DFE6E9;
    line-height: 28px;
    margin-top:18px;
`;

export const ImageBack = styled.Image`
    margin-top:-120px;
    align-self: center;
`;

export const ButtonNext = styled.TouchableOpacity`
    width:68px;
    height:58px;
    background-color: #EE7473;
    border-radius: 15px;
    align-self: center;
    margin-top: auto;
    margin-bottom: 55px;

    justify-content: center;
    align-items: center;
`;

export const ButtonNextText = styled.Text``;
