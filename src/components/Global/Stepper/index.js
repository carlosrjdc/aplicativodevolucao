import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

const StepperComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <View style={styles.container}>
      <ProgressSteps activeStep={0}>
        <ProgressStep label="Primeiro">
          <View style={styles.step}>
            <Text style={styles.title}>Primeiro passo</Text>
            <Text style={styles.text}>Conteúdo do primeiro passo</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="Segundo">
          <View style={styles.step}>
            <Text style={styles.title}>Segundo passo</Text>
            <Text style={styles.text}>Conteúdo do segundo passo</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="Terceiro">
          <View style={styles.step}>
            <Text style={styles.title}>Terceiro passo</Text>
            <Text style={styles.text}>Conteúdo do terceiro passo</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="quarto">
          <View style={styles.step}>
            <Text style={styles.title}>Terceiro passo</Text>
            <Text style={styles.text}>Conteúdo do terceiro passo</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  step: {
    alignItems: "center",
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#007AFF",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default StepperComponent;
