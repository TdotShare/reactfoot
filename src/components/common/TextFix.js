import React, { Component } from 'react';
import { Text as TextRN } from 'react-native';

import UI from '../../config/CommonStyles';

export default class Text extends Component {
    render() {
        return (
            <TextRN style={[{ fontWeight: this.props.type ? 'bold'  : '100', fontSize: this.props.type ? UI.font_titleSize : UI.font_normalSize }, this.props.style]}>
                {this.props.children}
            </TextRN>
        )
    }
}