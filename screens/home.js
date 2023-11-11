// Home.js
import React from "react";
import List from "./list";
import { View, Text, StyleSheet, Image} from "react-native";


const Home = () => {
  return (
    // tampilan pertama
    <View style={styles.container}>
      <View style={styles.box}>
        {/* Konten di dalam kotak */}
        <Text style={styles.boxText}>Camtion IT</Text>
        <Text style={styles.boxText1}>Application</Text>
        <View style={styles.infoContainer}>
          {/* Gambar pertama */}
          <Text style={styles.boxText2}>Informasi Kampus Seputar IT</Text>
          <Image
            source={require("./assets/it.png")}
            style={styles.gambarKecil}
          />
        </View>
        <View style={styles.infoContainer2}>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box3}></View>
        </View>
      </View>
      {/* tampilan kedua */}
      // tampilan kedua
      <View style={styles.box}>
        {/* Konten di dalam kotak */}
        <Text style={styles.boxText}>Artikel Terbaru</Text>
        {/* Tambahkan komponen List di sini */}
        <List />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    flexDirection: "column",
  },
  box: {
    width: 350,
    height: 200,
    paddingHorizontal: 20,
    backgroundColor: "#whit#", // Warna latar belakang kotak
    justifyContent: "left",
    alignItems: "left",
    borderRadius: 10, // Sudut melengkung pada kotak
    marginTop: 20, // Jarak ke bawah
  },
  box2: {
    width: 30,
    height: 10,
    backgroundColor: "#ffffff",
    marginLeft: 20,
    borderRadius: 10,
  },
  box3: {
    width: 15,
    height: 10,
    backgroundColor: "#ffffff",
    marginLeft: 5,
    borderRadius: 20,
  },
  boxText: {
    color: "#ffffff", // Warna teks di dalam kotak
    marginTop: 10, // Jarak ke bawah
    fontSize: 20,
    marginLeft: 10, // Jarak antara teks dan gambar
  },

  boxText1: {
    color: "#95AFF4", // Warna teks di dalam kotak
    marginLeft: 10, // Jarak antara teks dan gambar
  },
  infoContainer: {
    flexDirection: "row", // Mengatur tata letak ke arah row (horizontal)
    alignItems: "center", // Memposisikan elemen secara vertikal di tengah
    padding: 9,
  },
  infoContainer2: {
    flexDirection: "row", // Mengatur tata letak ke arah row (horizontal)
    alignItems: "center", // Memposisikan elemen secara vertikal di tengah
    padding: 6.5,
    marginBottom: 20,
  },
  boxText2: {
    color: "#ffffff", // Warna teks di dalam kotak
    marginLeft: 10, // Jarak antara teks dan gambar
    marginBottom: 20,
    fontSize: 24,
  },
  gambarKecil: {
    width: 100, // Sesuaikan ukuran gambar sesuai kebutuhan
    height: 100, // Sesuaikan ukuran gambar sesuai kebutuhan
  },
});

export default Home;
