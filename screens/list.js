import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
  } from "react-native";
  
  // Dummmy Data (Array of Object)
  const datas = [
    {
      id: 1,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.",
    },
    {
      id: 2,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
  ];
  
  // Functional Component
  const List = () => {
    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={styles.view} onPress={() => alert("Pressed")}>
          <View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };
  
  // Styles
  const styles = StyleSheet.create({
    view: {
      padding: 15,
      borderBottomColor: "#dddddd",
      borderBottomWidth: 1,
    },
    image: {
      height: 200,
      width: null,
    },
    text: {
      fontSize: 18,
      paddingTop: 10,
    },
  });
  
  export default List;
  