import React, { Component } from 'react';
import { translate } from 'react-i18next';

import { DEFAULTNAMESPACE, LANGUAGES } from 'app/i18n';

class LanguageSelector extends Component {
    changeLanguage(language) {
        const { i18n } = this.props;
        i18n.changeLanguage(language);
    }

    render() {
        return(
            <select onChange={ event => this.changeLanguage(event.target.value) } value={ this.props.i18n.language }>
                { LANGUAGES.map(language =>
                    <option
                        value={ language }
                        key={ language }
                    >
                        { language }
                    </option>) }
            </select>
        )
    }
}

export default translate(DEFAULTNAMESPACE)(LanguageSelector);
