"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopicSelect from "./_components/topicSelect";
import StyleSelect from "./_components/styleSelect";
import DurationSelect from "./_components/durationSelect";
import VoiceSelect from "./_components/voiceSelect";

const CreateNewVideo = () => {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("");
  const [duration, setDuration] = useState(30);
  const [voice, setVoice] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [submit, setSubmit] = useState([]);

  const steps = [
    {
      title: "Choose Topic",
      component: <TopicSelect onTopicChange={setTopic} />,
    },
    {
      title: "Select Style",
      component: <StyleSelect selectedStyle={style} onStyleChange={setStyle} />,
    },
    {
      title: "Set Duration",
      component: (
        <DurationSelect duration={duration} onDurationChange={setDuration} />
      ),
    },
    {
      title: "Pick Voice",
      component: <VoiceSelect selectedVoice={voice} onVoiceChange={setVoice} />,
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log({ topic, style, duration, voice });
    // form submission
  };

  return (
    <div className="min-h-screen p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
        <CardContent className="p-0">
          <div className="bg-primary text-white p-6">
            <h1 className="text-3xl font-bold mb-2">Create Your AI Video</h1>
            <p className="text-secondary-light">
              Bring your ideas to life with our cutting-edge AI technology
            </p>
          </div>
          <div className="p-6">
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index <= currentStep ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        index <= currentStep
                          ? "border-primary bg-primary text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="ml-2 text-sm font-medium">
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <ChevronRight className="mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {steps[currentStep].component}
            </motion.div>
            <div className="mt-8 flex justify-end">
              <Button
                onClick={handleNextStep}
                className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full flex items-center"
              >
                {currentStep === steps.length - 1 ? (
                  <>
                    Generate Video <Wand2 className="ml-2" />
                  </>
                ) : (
                  <>
                    Next <ChevronRight className="ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateNewVideo;
