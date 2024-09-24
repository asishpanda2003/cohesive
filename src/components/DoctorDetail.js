import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DoctorDetail = ({ doctor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../assets/doctor.jpg')} />
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialty}>{doctor.specialty}</Text>
        <View style={styles.row}>
          <FontAwesome name="star" size={16} color="gold" />
          <Text style={styles.rating}>{doctor.rating}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.label}>Experience</Text>
        <Text style={styles.value}>{doctor.experience}</Text>
        
        <Text style={styles.label}>Patients Checked</Text>
        <Text style={styles.value}>{doctor.patientsChecked}</Text>
        
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{doctor.location}</Text>

        <Text style={styles.label}>About</Text>
        <Text style={styles.value}>{doctor.details}</Text>

        <Text style={styles.label}>Schedule</Text>
        <Text style={styles.value}>
          {doctor.startTime} - {doctor.endTime}
        </Text>
        <Text style={styles.value}>Days: {doctor.scheduleDays.join(', ')}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Slot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  specialty: {
    color: 'gray',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 16,
  },
  details: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DoctorDetail;
