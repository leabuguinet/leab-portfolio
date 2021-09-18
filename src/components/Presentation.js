import React from 'react';
import { useTranslation } from 'react-i18next';
import "../i18n";

const Presentation = () => {

    const { t } = useTranslation();

    return(
        <div>
            <h3>Présentation</h3>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3>
        </div>
    )

    
}

export default Presentation;