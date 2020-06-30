import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalModule } from "./modules/global/global.module";
import { AlarmModule } from "./modules/alarm/alarm.module";
import { Provider } from "react-redux";
import { store, persistor } from "./modules/global/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { AlarmModuleParamList } from "./modules/alarm/alarm.module";
import { GlobalModuleParamList } from "./modules/global/global.module";
import { AuthModule, AuthModuleParamList } from "./modules/auth/auth.module";
import { navigation_ref } from "./modules/global/utils";
import { SubNavigator } from "./modules/global/types/subnavigator.type";

export type AppModuleParamList = {
	global: SubNavigator<GlobalModuleParamList> | undefined;
	alarm: SubNavigator<AlarmModuleParamList> | undefined;
	auth: SubNavigator<AuthModuleParamList> | undefined;
};

const AppModuleStack = createStackNavigator<AppModuleParamList>();

export class App extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<NavigationContainer ref={navigation_ref}>
						<AppModuleStack.Navigator
							screenOptions={{
								headerShown: false,
							}}
							initialRouteName="global"
						>
							<AppModuleStack.Screen
								name="global"
								component={GlobalModule}
							/>
							<AppModuleStack.Screen
								name="auth"
								component={AuthModule}
							/>
							<AppModuleStack.Screen
								name="alarm"
								component={AlarmModule}
							/>
						</AppModuleStack.Navigator>
					</NavigationContainer>
				</PersistGate>
			</Provider>
		);
	}
}
