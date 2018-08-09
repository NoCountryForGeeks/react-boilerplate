import React, { Component, Fragment } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		error: null,
		errorInfo: null
	};

	componentDidCatch(error, errorInfo) {
		const { onError } = this.props;
		onError ? onError(error, errorInfo) : null;
		this.setState({
			hasError: true,
			error,
			errorInfo
		});
	}

	close() {
		this.setState({
			hasError: false,
			error: null,
			errorInfo: null
		});
	}

	render() {
		const { ErrorComponent, WrappedComponent } = this.props;
		return (
			<Fragment>
				<WrappedComponent />
				{this.state.hasError && ErrorComponent ? (
					<ErrorComponent
						error={this.state.error}
						errorInfo={this.state.errorInfo}
						close={() => this.close()}
					/>
				) : null}
			</Fragment>
		);
	}
}

export { ErrorBoundary };
