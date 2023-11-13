import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';
import { Clock, SearchNormal1, ProfileCircle, Wallet3, CardSend, MoreCircle, Home, Car } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { sprite, box, bill, more, scooter, shopping, spoon, train, car } from '../../assets/Images';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Riwayat Pesanan</Text>
      </View>
      <ScrollView>
        <Main />
      </ScrollView>
    </View>
  )
}

const Main = () => {
  return (
    <View style={home.container}>
      <ScrollView horizontal style={{ paddingHorizontal: 20 }} showsHorizontalScrollIndicator={false}>
        <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 25, marginHorizontal: 5 }}>
          <Text style={{ color: 'black' }}>Gocar</Text>
        </View>
        <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 25, marginHorizontal: 5 }}>
          <Text style={{ color: 'black' }}>GoRide</Text>
        </View>
        <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 25, marginHorizontal: 5 }}>
          <Text style={{ color: 'black' }}>GoFood</Text>
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 20, marginTop: 20, }}>
        <Text style={{ color: 'black', fontSize: 14, }}>10 November, 2023</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={car}
            style={home.icon}
          />
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', paddingLeft: 10, }}>ITN Kampus 2</Text>
            <Text style={{ color: 'black', fontSize: 14 }}>Rp25.000</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20, }}>
        <Text style={{ color: 'black', fontSize: 14, }}>04 September, 2023</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={scooter}
            style={home.icon}
          />
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', paddingLeft: 10, }}>Malang Town Square</Text>
            <Text style={{ color: 'black', fontSize: 14 }}>Rp40.000</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 6,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40, // Add some margin to separate rows
  },
  background: {
    width: 65,
    height: 65,
    backgroundColor: colors.AmericanGreen(0.6),
    borderRadius: 15,
    marginHorizontal: 15,
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  goRideText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goCarText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    left: 5,
  },
  goFoodText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goSendText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goMartText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    left: 3,
  },
  goBillText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    // left: -10,
  },
  goTransitText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goMoreText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  image: {
    width: 'auto',
    height: 150,
    objectFit: 'cover',
  },
  header: {
    padding: 20,
  },
  searchbar: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
  },
  iconContainer: {
    paddingRight: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  profileIcon: {
    position: 'absolute',
    left: 320,
  },
})

const payment = StyleSheet.create({
  container: {
    top: -30,
    marginHorizontal: 20,
    width: 'auto',
    height: 60,
    backgroundColor: colors.white(),
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFF7F6',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10, // Meningkatkan nilai ini akan membuat bayangan lebih terlihat
    },
    shadowOpacity: 1, // Meningkatkan nilai ini akan membuat bayangan lebih tebal
    shadowRadius: 10, // Meningkatkan nilai ini akan membuat bayangan lebih menyebar
    elevation: 5, // Ini berlaku hanya untuk Android
  },
  wallet: {
    justifyContent: 'center',
    top: 8,
    left: 20,
  },
  saldo: {
    fontSize: 16,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  coin: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Reguler'],
    color: colors.black(),
  },
  debit: {
    justifyContent: 'center',
    left: 25,
  },
  pay: {
    justifyContent: 'center',
    left: 60,
  },
  payText: {
    left: -5,
    fontSize: 14,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  history: {
    justifyContent: 'center',
    left: 80,
  },
  more: {
    justifyContent: 'center',
    left: 90,
  },
});
