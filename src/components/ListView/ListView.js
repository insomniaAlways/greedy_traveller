import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ImageCard from '../cards/ImageCardView';

const ListView = props => {
	return (
		<FlatList 
			style={styles.listContainer}
			data={props.values}
			renderItem={(info) => (
				<ImageCard
						name={info.item.name}
						image={info.item.thumbnail}
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

export default ListView;