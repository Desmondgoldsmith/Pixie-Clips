import React from 'react';
import { Slider } from '@/components/ui/slider';

const DurationSelect = ({ duration, onDurationChange }) => {
  return (
    <div className="space-y-2">
      <p>Video Duration: {duration} seconds</p>
      <Slider
        min={15}
        max={120}
        step={15}
        value={[duration]}
        onValueChange={(value) => onDurationChange(value[0])}
      />
    </div>
  );
};

export default DurationSelect;