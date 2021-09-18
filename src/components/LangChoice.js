import React, { Component } from 'react'


import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class LangChoice extends Component {

  handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  
  render() {
    const { t } = this.props;

    return (
      <div className="App">

        <button onClick={() => this.handleClick('en')} >
            EN
        </button>
        <button onClick={() => this.handleClick('fr')} >
            FR
        </button>
         
        <h3>{t('Nav.Contact')}</h3>  
        
        <h3>{t('Why.1')}</h3>
   

      </div>
    )
  }
}

export default withTranslation()(LangChoice);