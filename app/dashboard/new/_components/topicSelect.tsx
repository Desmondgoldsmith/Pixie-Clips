import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const topics = ["Nature", "Technology", "History", "Science", "Art", "Custom"];

interface TopicSelectProps {
  onTopicChange: (topic: string) => void;
}

const TopicSelect: React.FC<TopicSelectProps> = ({ onTopicChange }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [customTopic, setCustomTopic] = useState<string>("");

  const handleTopicChange = (value: string) => {
    setSelectedTopic(value);
    onTopicChange(value === "Custom" ? customTopic : value);
  };

  const handleCustomTopicChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCustomTopic(e.target.value);
    if (selectedTopic === "Custom") {
      onTopicChange(e.target.value);
    }
  };

  return (
    <div className="space-y-4">
      <Select value={selectedTopic} onValueChange={handleTopicChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a topic" />
        </SelectTrigger>
        <SelectContent>
          {topics.map((topic) => (
            <SelectItem key={topic} value={topic}>
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedTopic === "Custom" && (
        <Textarea
          placeholder="Describe your custom topic"
          value={customTopic}
          onChange={handleCustomTopicChange}
          className="mt-2"
        />
      )}
    </div>
  );
};

export default TopicSelect;
