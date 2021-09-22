import React, { Component } from 'react'


import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class LangChoice extends Component {

  handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  
  render() {
    //const { t } = this.props;

    return (

      <div>
        <button onClick={() => this.handleClick('en')} >
            EN
        </button>
        <button onClick={() => this.handleClick('fr')} >
            FR
        </button>
      </div>

    )
  }
}

export default withTranslation()(LangChoice);