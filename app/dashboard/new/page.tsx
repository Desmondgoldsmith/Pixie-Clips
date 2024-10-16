"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Wand2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import TopicSelect from "./_components/topicSelect";
import StyleSelect from "./_components/styleSelect";
import DurationSelect from "./_components/durationSelect";
import VoiceSelect from "./_components/voiceSelect";
import LoadingAnimation from "./_components/loadingAnimation";
import axios from "axios";

const CreateNewVideo = () => {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("");
  const [duration, setDuration] = useState(30);
  const [voice, setVoice] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

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

  useEffect(() => {
    const checkNextDisabled = () => {
      switch (currentStep) {
        case 0:
          setIsNextDisabled(!topic);
          break;
        case 1:
          setIsNextDisabled(!style);
          break;
        case 2:
          setIsNextDisabled(!duration);
          break;
        case 3:
          setIsNextDisabled(!voice);
          break;
        default:
          setIsNextDisabled(false);
      }
    };
    checkNextDisabled();
  }, [currentStep, topic, style, duration, voice]);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    getScript();
  };

  const getScript = async () => {
    const prompt = `write a script to generate a ${duration} video on the topic : ${topic} , along with AI image prompt in a ${style} format. For each scene , give me a result in JSON format with imagePrompt and contentText as field`;
    try {
      const response = await axios.post("/api/get-video-script", { prompt });
      console.log(response.data);
      // Handle successful response here
    } catch (error: any) {
      console.error(
        "Error fetching script:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
        <CardContent className="p-0">
          <motion.div
            className="bg-primary text-white p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">Create Your AI Video</h1>
            <p className="text-secondary-light">
              Bring your ideas to life with our cutting-edge AI technology
            </p>
          </motion.div>
          <div className="p-6">
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${
                      index <= currentStep ? "text-primary" : "text-gray-400"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
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
                  </motion.div>
                ))}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {steps[currentStep].component}
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex justify-between">
              {currentStep > 0 && (
                <Button
                  onClick={handlePreviousStep}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full flex items-center"
                >
                  <ArrowLeft className="mr-2" /> Back
                </Button>
              )}
              <Button
                onClick={handleNextStep}
                disabled={isNextDisabled}
                className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full flex items-center ml-auto"
              >
                {currentStep === steps.length - 1 ? (
                  <span className="flex items-center">
                    Generate Video <Wand2 className="ml-2" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    Next <ChevronRight className="ml-2" />
                  </span>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <AlertDialog open={isLoading}>
        <AlertDialogContent className="bg-white p-6 rounded-lg shadow-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold mb-4">
              Generating Your Video
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              Please wait while we create your personalized AI video...
            </AlertDialogDescription>
          </AlertDialogHeader>
          <LoadingAnimation />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CreateNewVideo;
