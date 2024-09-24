import React from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

const DoctorListScreen = ({ navigation }) => {
  const [search, setSearch] = React.useState('');

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Name"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DoctorCard
            doctor={item}
            onPress={() => navigation.navigate('DoctorDetail', { doctor: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default DoctorListScreen;
