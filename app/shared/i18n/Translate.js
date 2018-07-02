import React, { Fragment } from 'react';
import { translate } from 'react-i18next';

export const Translate = translate()(
    ({ i18nKey, t }) =>
        <Fragment>
            { t(i18nKey) }
        </Fragment>
);
