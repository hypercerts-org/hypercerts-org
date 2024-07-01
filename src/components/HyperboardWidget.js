import React, { useEffect, useRef } from 'react';

const HyperboardWidget = ({ hyperboardId, minWidth = '300px', width = '100%'}) => {
  // Use useRef to refer to the div where the widget will be initialized.
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('data-hyperboard-id', hyperboardId);
    }

    const script = document.createElement('script');
    script.src = "https://staging.hyperboards.org/widget/hyperboard-widget.js";
    script.type = "module";
    script.async = true;

    // Append the script to the body.
    document.body.appendChild(script);

    // Clean up the script when the component unmounts.
    return () => {
      document.body.removeChild(script);
    };
  }, [hyperboardId]); // Depend on hyperboardId to re-run the effect if the ID changes.

  return (
    <div
      ref={widgetRef}
      className="hyperboard-widget"
      style={{ width: width, minWidth: minWidth }}
    ></div>
  );
};

export default HyperboardWidget;
