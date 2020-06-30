import * as React from "react";
import {
	View,
	Text,
	Button,
	FlatList,
	ListRenderItemInfo,
	TouchableOpacity,
	TextInput,
	Image,
	ImageStyle,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, CommonActions } from "@react-navigation/native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
/* user defined */
import { AppText, AppButton } from "../../../global/components";
import { $ } from "../../../global/styles";
import ActionReq from "../../../global/models/actionreq.model";
import { AlarmModuleParamList } from "../../../alarm/alarm.module";
import { AppModuleParamList } from "../../../../app.module";
import { RootState, Dispatch } from "../../../global/redux/store";
import { AxiosResponse } from "axios";
import ActionRes from "../../../global/models/actionres.model";
import * as _ from "lodash";
import { connect } from "react-redux";
import { AlarmModuleHometabParamList } from "../../home.alarm.module";
import moment from "moment";
import { Auth } from "../../../auth/models/auth.model";
const mapStateToProps = (state: RootState) => ({
	user: state.user,
	appsettings: state.appsettings,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setUser: dispatch.user.setUser,
});

type ConnectedProps = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

type Props = ConnectedProps & {
	navigation: StackNavigationProp<AppModuleParamList>;
	route: RouteProp<AlarmModuleHometabParamList, "alarm_account">;
};
class Component extends React.Component<Props> {
	/* input refs */
	state = {};
	constructor(props: Props) {
		super(props);
	}
	render() {
		return (
			<View style={[$.flex_1]}>
				<View
					style={[
						$.m_3,
						$.p_3,
						$.bg_white,
						$.border_rounded,
						$.elevation_2,
					]}
				>
					<View
						style={[
							$.p_3,
							$.border,
							$.border_light,
							$.border_rounded,
							$.align_items_center,
						]}
					>
						<View
							style={[
								$.bg_light,
								$.border,
								$.border_primary,
								$.elevation_4,
								$.align_items_center,
								$.justify_content_center,
								{ width: 70, height: 70, borderRadius: 35 },
							]}
						>
							<Image
								source={{
									uri: "http://i.stack.imgur.com/Dj7eP.jpg",
								}}
								style={[
									{
										width: 65,
										height: 65,
										borderRadius: 32.5,
									},
								]}
							/>
						</View>
						<AppText style={[$.h5, $.mt_3]}>
							{this.props.user.user?.f_name as string}
						</AppText>
						<AppText style={[$.h7, $.text_muted]}>
							{this.props.user.user?.login as string}
						</AppText>
					</View>
					<View
						style={[
							$.mt_2,
							$.p_3,
							$.bg_primary_05,
							$.border_rounded,
						]}
					>
						<AppText style={[$.h7, $.text_muted]}>
							Authentication Mode:{" "}
							{this.props.appsettings.auth_mode}
						</AppText>
						<AppText style={[$.h7, $.text_muted, $.mt_1]}>
							Logged in since: {moment().format()}
						</AppText>
						<AppText style={[$.h7, $.text_muted, $.mt_1]}>
							Apollo / Velachery
						</AppText>
					</View>
					<AppButton
						onPress={() => {
							this.logout();
						}}
						color="danger"
						appearance="fill"
						style={[$.mt_4]}
					>
						Log out
					</AppButton>
				</View>
			</View>
		);
	}
	logout() {
		this.props.setUser(new Auth());
		(this.props.navigation as StackNavigationProp<
			AppModuleParamList
		>).dispatch(
			CommonActions.reset({
				index: 1,
				routes: [
					{
						name: "auth",
					},
				],
			})
		);
	}
}
export const AccountAlarmComponent = connect(
	mapStateToProps,
	mapDispatchToProps as any
)(Component);
