import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ImageCard from '../cards/ImageCardView';

const placeList = props => {

	return (
		<FlatList 
			style={styles.listContainer}
			data={props.movies}
			renderItem={(info) => (
				<ImageCard
						name={info.item.name}
						image={info.item.image}
						onItemPressed={() =>  alert('selected')}
				/>      
			)}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		width: "100%"
	}
});

export default placeList;