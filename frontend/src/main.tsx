
// Safe entry point with error handling
(async function () {
    try {
        const rootEl = document.getElementById("root");
        if (!rootEl) throw new Error("Root element not found");

        // Dynamic imports to catch resolution/syntax errors in dependencies
        const [
            { createRoot },
            { Component },
            { default: App },
            _css
        ] = await Promise.all([
            import("react-dom/client"),
            import("react"),
            import("./App"),
            import("./index.css")
        ]);

        // Define ErrorBoundary locally since we are in an async function
        class ErrorBoundary extends Component<any, any> {
            constructor(props: any) {
                super(props);
                this.state = { hasError: false, error: null, errorInfo: null };
            }
            static getDerivedStateFromError(error: any) {
                return { hasError: true, error };
            }
            componentDidCatch(error: any, errorInfo: any) {
                console.error("Uncaught error:", error, errorInfo);
                this.setState({ errorInfo });
            }
            render() {
                if (this.state.hasError) {
                    return (
                        <div style={{ padding: "20px", color: "red", background: "white" }}>
                            <h1>React Error Boundary Caught:</h1>
                            <pre>{this.state.error?.toString()}</pre>
                            <pre>{this.state.errorInfo?.componentStack}</pre>
                        </div>
                    );
                }
                return this.props.children;
            }
        }

        createRoot(rootEl).render(
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        );

    } catch (err: any) {
        // Catch module loading errors (syntax errors in App.tsx, missing files, etc.)
        console.error("CRITICAL BOOT ERROR:", err);
        // Use visible HTML for the error
        document.body.innerHTML += `
      <div style="
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: white; 
        color: red; 
        padding: 20px; 
        z-index: 99999;
        overflow: auto;
      ">
        <h1>CRITICAL ERROR FAILING TO LOAD APP</h1>
        <p>It seems an import failed or there is a syntax error in a dependency.</p>
        <pre style="background: #eee; padding: 10px; border: 1px solid #999;">\${err.message}\n\n\${err.stack}</pre>
      </div>
    `;
    }
})();
