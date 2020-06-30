import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PatientDeviceListAlarmComponent } from "./containers/parientdevicelist/patientdevicelist.alarm.component";
import { PatientDeviceDetailsAlarmComponent } from "./containers/patientdevicedetails/patientdevicedetails.alarm.component";
import { DeviceDetailsAlarmComponent } from "./containers/devicedetails/devicedetails.alarm.component";
import {
	AlarmModuleHome,
	AlarmModuleHometabParamList,
} from "./home.alarm.module";
import { PatientDeviceMedicationListAlarmComponent } from "./containers/patientdevicemedicationlist/patientdevicemedicationlist.alarm.component";
import { DeviceMedicationListAlarmComponent } from "./containers/devicemedicationlist/devicemedicationlist.alarm.component";
import { SubNavigator } from "../global/types/subnavigator.type";
export type AlarmModuleParamList = {
	alarm_home: SubNavigator<AlarmModuleHometabParamList> | undefined;
	alarm_patient_list: undefined;
	alarm_patient_device_list: {
		id: number;
	};
	alarm_patient_device_details: {
		patient_order_id: number;
		patient_id: number;
		device_id: number;
	};
	alarm_pending_list: undefined;
	alarm_device_medication_list: { id: number };
	alarm_device_details: {
		patient_order_id: number;
		device_id: number;
	};
	alarm_patient_device_medication_list: {
		patient_id: number;
		device_id: number;
	};
};
export const AlarmModuleStack = createStackNavigator<AlarmModuleParamList>();

export function AlarmModule() {
	return (
		<AlarmModuleStack.Navigator initialRouteName="alarm_home">
			<AlarmModuleStack.Screen
				name="alarm_home"
				options={{ title: "Alarm" }}
				component={AlarmModuleHome}
			/>
			<AlarmModuleStack.Screen
				name="alarm_patient_device_list"
				options={{ title: "Patient Device List" }}
				component={PatientDeviceListAlarmComponent}
			/>
			<AlarmModuleStack.Screen
				name="alarm_patient_device_details"
				options={{ title: "Patient Device Details" }}
				component={PatientDeviceDetailsAlarmComponent}
			/>
			<AlarmModuleStack.Screen
				name="alarm_patient_device_medication_list"
				options={{ title: "Device Medication List" }}
				component={PatientDeviceMedicationListAlarmComponent}
			/>
			<AlarmModuleStack.Screen
				name="alarm_device_medication_list"
				options={{ title: "Device Medication List" }}
				component={DeviceMedicationListAlarmComponent}
			/>
			<AlarmModuleStack.Screen
				name="alarm_device_details"
				options={{ title: "Device Details" }}
				component={DeviceDetailsAlarmComponent}
			/>
		</AlarmModuleStack.Navigator>
	);
}
