import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, Switch } from 'react-native';

import Option from '../components/Option';

import styles from './styles/CheckoutScreen';

import back from '../../assets/images/back.png';
import creditCard from '../../assets/icons/credit-card.png';
import home from '../../assets/icons/home.png';

const DeliveryOptions = [
  {
    id: '0',
    title: 'I’ll pick it up myself',
    icon: require('../../assets/icons/walking.png'),
  },
  {
    id: '1',
    title: 'By courier',
    icon: require('../../assets/icons/bike.png'),
  },
  {
    id: '2',
    title: 'By Drone',
    icon: require('../../assets/icons/drone.png'),
  },
];

export default function CheckoutScreen({ route, navigation, children }) {
	const [selectedOptionId, setSelectedOptionId] = useState(0);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	const renderOption = ({item}) => (
		<Option item={item} onPress={() => setSelectedOptionId(item.id)} selectedId={selectedOptionId}/>
	);

  function handleGoBack() {
    navigation.navigate('Categories');
  }

  function PaymentMethodPress() {
  	navigation.navigate('PaymentMethodScreen');
  }

  return (
  	<View>
			<View style={styles.header}>
			  <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
					<Image
						style={styles.backButtonIcon}
						source={back}
					/>
			  </TouchableOpacity>
			  <Text style={styles.title}>Checkout</Text>
			</View>
			<View style={styles.checkoutDetails}>
				<View style={styles.detailsBox}>
					<View style={styles.modifyBox}>
						<Text style={styles.checkoutDetailsText}>
							Payment method
						</Text>
						<TouchableOpacity onPress={PaymentMethodPress}>
							<Text style={styles.button}>
								CHANGE
							</Text>	
						</TouchableOpacity>
					</View>
					<View style={styles.personalBox}>
						<Image style={styles.icon} source={creditCard}/>
						<Text style={styles.personalContent}>**** **** **** 4747</Text>
					</View>
				</View>

				<View style={styles.detailsBox}>
					<View style={styles.modifyBox}>
						<Text style={styles.checkoutDetailsText}>
							Delivery address
						</Text>
						<TouchableOpacity>
							<Text style={styles.button}>
								CHANGE
							</Text>	
						</TouchableOpacity>
					</View>
					<View style={styles.personalBox}>
						<Image style={styles.icon} source={home}/>
						<View>
							<Text style={styles.personalContent}>Alexandra Smith</Text>
							<Text style={styles.personalContent}>Cesu 31 k-2 5.st, SIA Chili</Text>
							<Text style={styles.personalContent}>Riga</Text>
							<Text style={styles.personalContent}>LV–1012</Text>
							<Text style={styles.personalContent}>Latvia</Text>
						</View>
					</View>
				</View>

				<View style={styles.detailsBox}>
					<View style={styles.modifyBox}>
						<Text style={styles.checkoutDetailsText}>
							Delivery options
						</Text>
						<TouchableOpacity>
							<Text style={styles.button}>
								CHANGE
							</Text>	
						</TouchableOpacity>
					</View>
		      <FlatList
		        data={DeliveryOptions}
		        renderItem={renderOption}
		        keyExtractor={item => item.id}
		        extraData={selectedOptionId}
		      />
				</View>

		    <View style={[styles.detailsBox, styles.modifyBox]}>
					<Text style={styles.checkoutDetailsText}>
						Non-contact-delivery
					</Text>
		      <Switch
		        trackColor={{ false: "#fff", true: "#E2CBFF" }}
		        thumbColor={isEnabled ? "#fff" : "#E2CBFF"}
		        ios_backgroundColor="#3e3e3e"
		        onValueChange={toggleSwitch}
		        value={isEnabled}
		        style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }], marginRight: 5 }}
		      />
		    </View>

			</View>
		</View>
  );
}
