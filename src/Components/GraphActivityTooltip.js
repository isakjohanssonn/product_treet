// CustomTooltipContent.js
import React from "react";
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

const GraphActivityTooltip = props => {
  // payload[0] doesn't exist when tooltip isn't visible
  if (props.payload[0] != null) {
    // mutating props directly is against react's conventions
    // so we create a new payload with the name and value fields set to what we want
    const newPayload = [
      {
        name: 'Reported activity',
        // all your data which created the tooltip is located in the .payload property
        value: (props.payload[0].payload.value),
        unit: 'km',
      },
        {

          // min value (ref line)
        name: 'Rek. daily min.',
        value: (props.payload[0].payload.line),
        unit: 'km',

      },
      
     // ...props.payload,
    ];

    // we render the default, but with our overridden payload
    return <DefaultTooltipContent {...props} payload={newPayload} />;
  }

  // we just render the default
  return <DefaultTooltipContent {...props} />;
};

export default GraphActivityTooltip;