import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Select,
  Alert,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

degerler = {
  sayi1: 0,
  sayi2: 0,
  type: "topla",
};

export default function App() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "topla", value: "Topla" },
    { key: "cikar", value: "Çıkar" },
    { key: "carp", value: "Çarp" },
    { key: "bol", value: "Böl" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.label}>İlk Sayıyı Giriniz:</Text>
      <TextInput
        style={styles.input}
        placeholder="ilk sayıyı giriniz"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
        onChangeText={(text) => {
          degerler.sayi1 = text;
        }}
      />
      <Text style={styles.label}>İkinci Sayıyı Giriniz:</Text>
      <TextInput
        style={styles.input}
        placeholder="ikinci sayıyı giriniz"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
        onChangeText={(text) => {
          degerler.sayi2 = text;
        }}
      />
      <Text style={styles.label}>İşlemi Seçiniz:</Text>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="key"
        placeholder="İşlemi Seçiniz"
        onSelect={() => {
          degerler.type = selected;
        }}
        defaultOption="topla"
      />

      <Text style={styles.label}></Text>
      <Button
        style={styles.button}
        title="Hesapla"
        onPress={() => {
          if (degerler.sayi1 == 0 || degerler.sayi2 == 0)
            return Alert.alert("Hata", "Lütfen tüm alanları doldurunuz", [
              { text: "Tamam" },
            ]);
          switch (degerler.type) {
            case "topla":
              Alert.alert(
                "Sonuç",
                degerler.sayi1 +
                " + " +
                degerler.sayi2 +
                " = " +
                (parseInt(degerler.sayi1) + parseInt(degerler.sayi2)),
                [{ text: "Tamam" }],
              );
              break;
            case "cikar":
              Alert.alert(
                "Sonuç",
                degerler.sayi1 +
                " - " +
                degerler.sayi2 +
                " = " +
                (parseInt(degerler.sayi1) - parseInt(degerler.sayi2)),
                [{ text: "Tamam" }],
              );
              break;
            case "carp":
              Alert.alert(
                "Sonuç",
                degerler.sayi1 +
                " * " +
                degerler.sayi2 +
                " = " +
                parseInt(degerler.sayi1) * parseInt(degerler.sayi2),
                [{ text: "Tamam" }],
              );
              break;
            case "bol":
              Alert.alert(
                "Sonuç",
                degerler.sayi1 +
                " / " +
                degerler.sayi2 +
                " = " +
                parseInt(degerler.sayi1) / parseInt(degerler.sayi2),
                [{ text: "Tamam" }],
              );
              break;
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },

  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
  },
});
