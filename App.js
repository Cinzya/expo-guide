import React, { useState } from 'react';
import { Button, ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function App(){
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
  
	const ItemButton = (props) => {
		return(
		<View>
			<Button
			onPress={() => fetchData(props.id)}
			title={props.id}
			color="#a6f7e9"
			accessibilityLabel={props.id}
			/>
		</View>
		)
	};

	const fetchData =(beaconId) => {

		console.log('fetching MySQL data for beacon with id: ' + beaconId);

		//Fetch request to db host
		fetch('https://genus-novum.com/items.php', {
			method: 'post',
			mode: 'cors',
			headers:{
				'Content-Type': 'application/json',     //Type of content to be sent 
				'Accept': 'application/json'            //and to be expected
			},
			body: JSON.stringify({      //Turn object into string
				id: beaconId
			})
		})
			.then((response) => response.json())      //Turn response into JSON
			.then((json) => setData(json))            //Write response to variable
			.then(() => console.log('New MySQL data set'))
			.catch((error) => console.error(error))
			.then(() => setLoading(false));           //Get rid of spinny thing
	};

	//Display content of data variable
	return (
		<View style={{ flex: 1, padding: 24 }}>
		{isLoading ? <ActivityIndicator/> : (
			<FlatList
			data={data}
			keyExtractor={({ item_id }) => item_id}
			renderItem={({ item }) => (
				<Text>Title: "{item.item_name}", Room Nr.: {item.room_id}</Text>
			)}
			/>
		)}
		<ItemButton id="w1qcgnru2g" />
		<ItemButton id="5wb8fchncj" />
		<ItemButton id="rznp0w81zl" />
		<ItemButton id="k82tz3vpzf" />
		</View>
	);
};