import React, {useEffect, useState} from 'react';
import {AsyncStorage, Clipboard, Dimensions, View, WebView} from 'react-native';
import {Button, Icon, Text, Textarea} from 'native-base';
import {defaultText} from "../constants/defaultText";
import styled from "styled-components";
import marked from "marked";
import HTML from 'react-native-render-html';
import {ScrollView} from "react-navigation";
import insane from 'insane'

const Screen = ({navigation}) => {
    // defaultText
    const [text, setText] = useState(insane(''));
    //clipboard
    const [clipBoard, onClipBoard] = useState(insane(null));
    // Storage Text in Async Storage for save

    const _storeData = async () => {
        try {
            if (await AsyncStorage.getItem('markD0wn') && text.length === 0 ) {
                await AsyncStorage.setItem('markD0wn', text);
            }else {
                setText(defaultText);
            }
        } catch (error) {
            console.log(error.message)
        }
    };


    useEffect(() => {
            _storeData();
        }, []
    )

    const renderText = texty => {
        return marked(texty);
    };
    const writeToClipboard = async () => {
        Clipboard.setString(text);
        alert('Copied to clipboard');
    };

    return (
        <>
            <Flex>
                <Buttons onPress={() => {
                    writeToClipboard()
                }} iconLeft>
                <Icon name='copy'/>
                <Text>Copy</Text>
            </Buttons>
            </Flex>
            <View>
                <Textareas
                    rowSpan={5}
                    bordered
                    placeholder={"MarkD0wn Preview"}
                    value={text}
                    onChangeText={setText}
                />
            </View>
            <ScrollView>
                <View style={{flexDirection: "collun", margin:10}}>
                    {/*<WebViews*/}
                    {/*    source={{html: renderText(text)}}*/}
                    {/*/>*/}
                    <HTML html={renderText(text) }/>
                </View>
            </ScrollView>
        </>
    );
};

Screen.navigationOptions = {
    title: 'MarkD0wn Previewer'
};

const Textareas = styled(Textarea)`
  display: flex;
width:  ${Dimensions.get('window').width};
height:  ${Dimensions.get('window').height / 3};
border: 1px solid rgb(0,0,0);
  
`
const Flex = styled(View)`
`
const Buttons = styled(Button)`
  display: flex;
  align-self: center;
  margin: 1%;
`
const WebViews = styled(WebView)`
margin: 1%;
width: ${Dimensions.get('window').width}; 
height: ${Dimensions.get('window').height / 2};
`

export default Screen;
