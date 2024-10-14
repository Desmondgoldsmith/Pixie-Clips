import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const voices = [
  { name: 'Emma', accent: 'British', gender: 'Female' },
  { name: 'James', accent: 'American', gender: 'Male' },
  { name: 'Yuki', accent: 'Japanese', gender: 'Female' },
  { name: 'Hans', accent: 'German', gender: 'Male' },
];

const VoiceSelect = ({ selectedVoice, onVoiceChange }) => {
  return (
    <Select value={selectedVoice} onValueChange={onVoiceChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose a voice" />
      </SelectTrigger>
      <SelectContent>
        {voices.map((voice) => (
          <SelectItem key={voice.name} value={voice.name}>
            {voice.name} ({voice.accent} {voice.gender})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default VoiceSelect;