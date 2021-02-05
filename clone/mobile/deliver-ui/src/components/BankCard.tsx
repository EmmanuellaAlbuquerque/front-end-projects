import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles/BankCard';

import bcSymbol from '../../assets/images/bc-symbol.png';

export default function BankCard() {
	return (
		<View style={styles.card}>
			<Image style={styles.bcSymbol} source={bcSymbol}/>
			<Text style={[styles.textDetails, styles.cardNumber]}>4747  4747  4747  4747</Text>

			<View style={styles.cardDetails}>
				<Text style={[styles.textDetails, styles.nameOnCard]}>Alexandra Smith</Text>
				<Text style={[styles.textDetails, styles.expiryDate]}>07/21</Text>
			</View>
		</View>
	);
}
