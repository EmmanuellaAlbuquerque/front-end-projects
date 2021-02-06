import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import HeaderGridContainer from '../components/HeaderGridContainer';
import BankCard from '../components/BankCard';

import takeAPhoto from '../../assets/icons/take-a-photo.png';
import bcSymbol from '../../assets/images/bc-symbol.png';
import hint from '../../assets/icons/hint.png';

import styles from './styles/PaymentMethodScreen';

export default function PaymentMethodScreen({ route, navigation, children }) {
	const [name, setName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [CVC, setCVC] = useState('');

	const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

	function handleSend() {
		// console.warn({
		// 	name,
		// 	cardNumber,
		// 	expiryDate,
		// 	CVC
		// });
	}

	function handleOpenCamera(navigation) {
		navigation.navigate('CameraScreen');
	}

	return (
		<ScrollView>
    <HeaderGridContainer 
    	navigation={navigation} 
    	route={route} 
    	children={children} 
    	searchItem={false} 
    	name={"Credit / Debit card"}
    >

    <BankCard />

    <TouchableOpacity onPress={() => handleOpenCamera(navigation)}>
    	<Image style={styles.takeAPhotoIcon} source={takeAPhoto}/>
    </TouchableOpacity>

    <View style={styles.textInput}>
	    <Text style={styles.label}>Name on card</Text>
	    <TextInput
	      style={styles.rawInput}
	      placeholder="Ex.: Jane Doe"
	      onChangeText={name => setName(name)}
	      defaultValue={name}
	    />

	    <Text style={styles.label}>Card number</Text>
	    <View style={styles.inputWithIcon}>
		    <TextInput
		      style={styles.rawInputWithIcon}
		      placeholder="Ex.: 0000  0000  0000  0000"
		      onChangeText={cardNumber => setCardNumber(cardNumber)}
		      defaultValue={cardNumber}
		      keyboardType="numeric"
		      maxLength={19}
		    />
		    <Image style={styles.bcSymbol} source={bcSymbol}/>
	    </View>

	    <View style={styles.columnInput}>
	    	<View style={styles.columnStyle}>
			    <Text style={styles.label}>Expiry date</Text>
			    <TextInput
			      style={styles.rawInput}
			      placeholder="Ex.: 07/21"
			      onChangeText={expiryDate => setExpiryDate(expiryDate)}
			      defaultValue={expiryDate}
			      maxLength={5}
			    />
	    	</View>

	    	<View style={styles.columnStyle}>
			    <Text style={styles.label}>CVC</Text>
			    <View style={styles.inputWithIcon}>
				    <TextInput
				      style={styles.rawInputWithIcon}
				      placeholder="Ex.: 474"
				      onChangeText={CVC => setCVC(CVC)}
				      defaultValue={CVC}
				      keyboardType="numeric"
				      maxLength={3}
				    />
				    <Image style={styles.hint} source={hint}/>
			    </View>
	    	</View>
	    </View>
    </View>

    <TouchableOpacity style={styles.button} onPress={handleSend}>
    	<Text style={styles.buttonText}>
    		use this card
    	</Text>
    </TouchableOpacity>

    </HeaderGridContainer>
    </ScrollView>
	);
}
