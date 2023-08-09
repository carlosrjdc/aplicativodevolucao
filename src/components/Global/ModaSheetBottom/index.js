import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const ModaSheetBootom = ({ children, index, bottomSheetRef }) => {
  // ref

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      backdropPressToClose={true}
      ref={bottomSheetRef}
      index={index}
      snapPoints={[1, "20%", "50%"]}
      onChange={handleSheetChanges}
      ba
    >
      <View style={styles.contentContainer}>{children}</View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default ModaSheetBootom;
