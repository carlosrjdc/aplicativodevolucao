import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const ModalComponent = ({ modalizeRef, onOpen, children }) => {
  return (
    <>
      <Modalize panGestureEnabled={true} ref={modalizeRef} snapPoint={280} modalHeight={700}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always" enableOnAndroid={true} extraScrollHeight={80}>
          {children}
        </KeyboardAwareScrollView>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  opcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 100,
    marginTop: 24,
  },
});
