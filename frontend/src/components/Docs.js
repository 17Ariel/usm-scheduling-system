import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
const Docs = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#f5f5f5",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Sample</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Docs;
