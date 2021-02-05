import React from 'react';
import { View, Text } from 'react-native';

import HeaderGridContainer from '../components/HeaderGridContainer';
import BankCard from '../components/BankCard';

import styles from './styles/PaymentMethodScreen';

export default function PaymentMethodScreen({ route, navigation, children }) {
	return (
    <HeaderGridContainer 
    	navigation={navigation} 
    	route={route} 
    	children={children} 
    	searchItem={false} 
    	name={"Credit / Debit card"}
    >

    <BankCard />

    </HeaderGridContainer>
	);
}
