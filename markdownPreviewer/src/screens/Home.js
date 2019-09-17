import React, {useEffect} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base';
import mark from '../../assets/markdown.png';
import styled from "styled-components";

// import Image from "react-native-web/src/exports/Image";

const Screen = ({navigation}) => {

   useEffect(()=> {
       setTimeout( ()=>{
           navigation.navigate('MarkDown');
       },1000)
   },[])
    return (
        <>
                <Flex onPress={() => navigation.navigate('MarkDown')}>
                    <Image source={mark} style={{width: 300, height: 300}}/>
                    <Text>MarkD0wn Previewer </Text>
                    <Text>Ibrahima DANSOKO </Text>
                </Flex>
        </>
    );
};



const Flex = styled(TouchableOpacity)`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
flex: 1;
`



export default Screen;
