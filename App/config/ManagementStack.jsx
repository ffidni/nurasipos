import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../screens/management/Category/Category";
import AddCustomer from "../screens/management/Customer/AddCustomer";
import CustomerDetail from "../screens/management/Customer/CustomerDetail";
import CustomerList from "../screens/management/Customer/CustomerList";
import Navigation from "../screens/management/Navigation";
import AddProduct from "../screens/management/Product/AddProduct";
import ProductDetail from "../screens/management/Product/ProductDetail";
import ProductList from "../screens/management/Product/ProductList";
import StockDetail from "../screens/management/Stock/StockDetail";
import StockList from "../screens/management/Stock/StockList";

const ProductStack = createNativeStackNavigator();
const ProductStackScreen = () => {
  return (
    <ProductStack.Navigator screenOptions={{ headerShown: false }}>
      <ProductStack.Screen name="Produk" component={ProductList} />
      <ProductStack.Screen name="AddProduk" component={AddProduct} />
      <ProductStack.Screen name="ProdukDetail" component={ProductDetail} />
    </ProductStack.Navigator>
  );
};

const CustomerStack = createNativeStackNavigator();
const CustomerStackScreen = () => {
  return (
    <CustomerStack.Navigator screenOptions={{ headerShown: false }}>
      <CustomerStack.Screen name="CustomerList" component={CustomerList} />
      <CustomerStack.Screen name="AddCustomer" component={AddCustomer} />
      <CustomerStack.Screen name="CustomerDetail" component={CustomerDetail} />
    </CustomerStack.Navigator>
  );
};

const StockStack = createNativeStackNavigator();
const StockStackScreen = () => {
  return (
    <StockStack.Navigator screenOptions={{ headerShown: false }}>
      <StockStack.Screen name="StockList" component={StockList} />
      <StockStack.Screen name="StockDetail" component={StockDetail} />
    </StockStack.Navigator>
  );
};

const ManagementStack = createNativeStackNavigator();
const ManagementStackScreen = () => {
  return (
    <ManagementStack.Navigator screenOptions={{ headerShown: false }}>
      <ManagementStack.Screen name="ManagementTab" component={Navigation} />
      <ManagementStack.Screen name="ProdukTab" component={ProductStackScreen} />
      <ManagementStack.Screen name="CategoryTab" component={Category} />
      <ManagementStack.Screen
        name="CustomerTab"
        component={CustomerStackScreen}
      />
      <ManagementStack.Screen name="StockTab" component={StockStackScreen} />
    </ManagementStack.Navigator>
  );
};

export default ManagementStackScreen;
