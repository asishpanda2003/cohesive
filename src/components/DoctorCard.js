import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker"; // For dropdown
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const DoctorCard = ({ doctor }) => {
  const [selectedAvailability, setSelectedAvailability] = useState(doctor.available);
  const navigation = useNavigation(); // Get the navigation object

  const handlePress = () => {
    // Navigate to the specific page, e.g., DoctorDetail
    navigation.navigate('DoctorDetail', { doctor });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}> {/* Make the card tappable */}
      {/* Image on the left with yellow background */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/doctor.jpg")}
          resizeMode="cover"
        />
      </View>

      {/* Content (name, specialty, rating, and availability dropdown) */}
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.nameSpecialtyContainer}>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.specialty}>{doctor.specialty}</Text>
          </View>

          {/* Rating aligned to the right side */}
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color="gold" />
            <Text style={styles.rating}>{doctor.rating}</Text>
          </View>
        </View>

        {/* Dropdown for availability below name and specialty */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedAvailability}
            onValueChange={(itemValue) => setSelectedAvailability(itemValue)}
            itemStyle={{ textAlign: "center" }}
            style={styles.picker}
          >
            <Picker.Item label="Available" value="Available" />
            <Picker.Item label="Unavailable" value="Unavailable" /> {/* Add more options if needed */}
          </Picker>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    flexDirection: "row",
    height: 170,
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    borderRadius: 5,
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  nameSpecialtyContainer: {
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specialty: {
    color: "gray",
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  rating: {
    marginLeft: 10,
    fontSize: 17,
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 55,
    marginTop: 5,
    overflow: "hidden",
  },
  picker: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});

export default DoctorCard;