import React from 'react';

import AppNavigator from './navigation/AppNavigator';
import { useFonts } from 'expo-font';

const App = () => {
	let [fontsLoaded] = useFonts({
		Roboto700: require('./assets/Roboto-Bold.ttf'),
		Roboto500: require('./assets/Roboto-Medium.ttf'),
		Roboto400: require('./assets/Roboto-Regular.ttf'),
	});

	return <AppNavigator />;
};

export default App;
