import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: #5C6FAD;
    justify-content: center;
    align-items: center;
    padding:26px;
`;

export const Description = styled.Text`
    font-family: 'Ubuntu_700Bold';
    color:#fff;
    font-size: 23px;
`;

export const Input = styled.TextInput`
    height:40px;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    margin-top:62px;
    padding:0 15px;
    color:#000;
    font-size: 17px;
`;

export const ButtonGetStarted = styled.TouchableOpacity`
    width:100%;
    height:52px;
    background-color: #EE7473;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-top:62px;
`;

export const ButtonGetStartedText = styled.Text`
    font-family: 'Ubuntu_700Bold';
    color:#fff;
    font-size: 18px;
`;
