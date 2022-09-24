import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Sales/Cart";
import Payment from "../screens/Sales/Payment";
import Sales from "../screens/Sales/Sales";

const SalesStack = createNativeStackNavigator();
export const SalesStackScreen = () => {
  return (
    <SalesStack.Navigator
      screenOptions={{ headerTitleAlign: "center", headerShown: false }}
    >
      <SalesStack.Screen name="Transaction" component={Sales} />
      <SalesStack.Screen name="Cart" component={Cart} />
      <SalesStack.Screen name="Payment" component={Payment} />
    </SalesStack.Navigator>
  );
};

export default SalesStackScreen;
