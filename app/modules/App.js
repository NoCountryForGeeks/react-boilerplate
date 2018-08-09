import React, { Component, Fragment } from 'react';

import LanguageSelector from 'shared/i18n/LanguageSelector';
import { Translate } from 'shared/i18n/Translate';

import noCountryForGeeksLogo from 'assets/images/logo.svg';
import { mainTitle, logo, selector } from './app.scss';

export class App extends Component {
	render() {
		return (
			<Fragment>
				<header>
					<h1 className={mainTitle}>
						<Translate i18nKey={'baseProject'} />
					</h1>
				</header>
				<main>
					<img
						src={noCountryForGeeksLogo}
						alt='No country for geeks'
						className={logo}
					/>
					<h3>
						<Translate i18nKey={'presentation'} />
					</h3>
					<span>
						<Translate i18nKey={'description'} />
					</span>
					<div className={selector}>
						<label>
							<Translate i18nKey={'language'} />
						</label>{' '}
						<LanguageSelector />
					</div>
				</main>
			</Fragment>
		);
	}
}
