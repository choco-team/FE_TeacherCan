import { Component, ErrorInfo, ReactNode } from 'react';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import { APIError, isResponseAPIError } from '@Api/common';

type Props = {
  children?: ReactNode;
};

type State = {
  shouldRethrow: boolean;
  error: Error | APIError | null;
};

class AuthErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shouldRethrow: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: APIError | Error) {
    if (
      (error instanceof APIError && error.code !== 1002) ||
      !isResponseAPIError(error)
    ) {
      return {
        shouldRethrow: true,
        error,
      };
    }

    return {
      shouldRethrow: false,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('error: ', error);
    console.log('errorInfo: ', errorInfo);
  }

  render() {
    const { error, shouldRethrow } = this.state;

    if (shouldRethrow) {
      throw error;
    }

    if (error && isResponseAPIError(error)) {
      window.location.pathname = route.calculatePath([
        ROUTE_PATH.auth,
        ROUTE_PATH.signIn,
      ]);

      return;
    }

    return this.props.children;
  }
}

export default AuthErrorBoundary;
