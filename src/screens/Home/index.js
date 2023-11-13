import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Clock, SearchNormal1, ProfileCircle, Wallet3, CardSend, MoreCircle, Home } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { sprite, box, bill, more, scooter, shopping, spoon, train, car } from '../../assets/Images';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <SearchNormal1 color={colors.black()} variant="Linear" size={24} style={styles.searchIcon} />
          <TextInput
            style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
          <ProfileCircle color='green' variant='Bold' size={40} style={styles.profileIcon} />
        </View>
      </View>
      <ScrollView>
        <Image source={sprite} style={styles.image} />
        <Payment />
        <Main />
      </ScrollView>
    </View>
  )
}

const Payment = () => {
  return (
    <View style={payment.container}>
      <Wallet3 color='#00819F' variant='Bold' size={40} style={payment.wallet} />
      <View style={payment.debit}>
        <Text style={payment.saldo}>Rp50.000</Text>
        <Text style={payment.coin}>0 Coins</Text>
      </View>
      <TouchableOpacity style={payment.pay} >
        <CardSend color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Bayar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={payment.history}>
        <Clock color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Riwayat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={payment.more}>
        <MoreCircle color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Lainnya</Text>
      </TouchableOpacity>
    </View>
  )
}

const Main = () => {
  return (
    <View style={home.container}>
      <View style={home.rowContainer}>
        <TouchableOpacity style={home.background}>
          <Image source={scooter} style={home.icon} />
          <Text style={home.Text}>GoRide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={car} style={home.icon} />
          <Text style={home.Text}>GoCar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={spoon} style={home.icon} />
          <Text style={home.Text}>GoFood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={box} style={home.icon} />
          <Text style={home.Text}>GoSend</Text>
        </TouchableOpacity>
      </View>
      <View style={home.rowContainer}>
        <TouchableOpacity style={home.background}>
          <Image source={shopping} style={home.icon} />
          <Text style={home.Text}>GoMart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={bill} style={home.icon} />
          <Text style={home.Text}>GoTagihan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={train} style={home.icon} />
          <Text style={home.Text}>GoTransit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={more} style={home.icon} />
          <Text style={home.Text}>Lainnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    marginHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  background: {
    width: 65,
    height: 65,
    backgroundColor: colors.AmericanGreen(0.6),
    borderRadius: 15,
  },
  icon: {
    top: 8,
    left: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  Text: {
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    fontSize: 13,
    marginTop: 15,
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
    left: 285,
  },
})

const payment = StyleSheet.create({
  container: {
    top: -20,
    marginHorizontal: 10,
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
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  wallet: {
    justifyContent: 'center',
    top: 8,
    left: 20,
  },
  debit: {
    justifyContent: 'center',
    left: 25,
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
  payText: {
    fontSize: 13,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  pay: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 70,
  },
  history: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 80,
  },
  more: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 90,
  },
});
