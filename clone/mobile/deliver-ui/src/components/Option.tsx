import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

import check from '../../assets/icons/check.png';

import styles from './styles/Option';

export default function Option({item, onPress, style, selectedId}) {
	const selected = item.id == selectedId ? true : false;
	const color = selected ? "#7203FF" : "#9586A8";
	const fontFamily = selected ? 'SFProText-Semibold' : 'SFProText-Regular';

	return (
		<TouchableOpacity onPress={onPress} style={styles.option}>
			<View style={styles.box}>
				<Image style={styles.icon} source={item.icon} />
				<Text style={[{ color, fontFamily }, styles.optionText]}>{item.title}</Text>
			</View>
			{selected && <Image style={styles.icon} source={check}/>}
		</TouchableOpacity>
	);
}
