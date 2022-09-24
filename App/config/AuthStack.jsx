import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ResetPassword from "../screens/auth/ResetPassword";
import SendForgot from "../screens/auth/SendForgot";

const AuthStack = createNativeStackNavigator();
export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerTitleAlign: "center", headerShown: false }}
    >
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
        name="Send"
        component={SendForgot}
        options={{ title: "Forgot Password" }}
      />
      <AuthStack.Screen
        name="Reset"
        component={ResetPassword}
        options={{ title: "Forgot Password" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
