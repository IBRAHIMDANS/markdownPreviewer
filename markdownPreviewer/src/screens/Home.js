import React, {useEffect, useState} from 'react';
import {View, WebView} from 'react-native';
import {Button, Icon, Text, Textarea} from 'native-base';
import {defaultText} from "../constants/defaultText";
import styled from "styled-components";
import marked from "marked";
import HTML from 'react-native-render-html';
import {ScrollView} from "react-navigation";

const Screen = ({navigation}) => {
    const [text, onChangeText] = useState(defaultText);
    //autosize text
    useEffect(() => {
        renderText(text)
    });
    const renderText = texty => {
        return marked(text);
    };
    return (
        <>
            <Buttons iconLeft>
                <Icon name='copy'/>
                <Text>Copy</Text>
            </Buttons>
            <View>
                <Textarea
                    rowSpan={5}
                    bordered
                    placeholder={"MarkD0wn Preview"}
                    value={text}
                    style={{height: 40}}
                    onChangeText={onChangeText}
                />
            </View>
            <ScrollView>
                <View>
                    <WebView
                        source={{html: '<h1>Hello world</h1>'}}
                    />
                    <HTML html={renderText(text) }/>
                </View>
            </ScrollView>
        </>
    );
};

Screen.navigationOptions = {
    title: 'MarkD0wn Previewer'
};

const Buttons = styled(Button)`
  display: flex;
  width: 100px;
  align-self: flex-end;
  margin: 1%;
`
const WebViews = styled(WebView)`
  flex: 1;
  width: 300px;
  height: 30px;
`

export default Screen;
