import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Log the error, e.g., send it to a server
    }
  
    render() {
      if (this.state.hasError) {
        // Display a user-friendly error message or fallback UI
        return <div>Something went wrong.</div>;
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  