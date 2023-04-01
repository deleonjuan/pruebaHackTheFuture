import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import {
  SingUpPage,
  SingInPage,
  ProfilePage,
  ProductDetailPage,
  AddProductPage,
  FeedPage,
} from "./src/pages";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function UnloggedStack() {
  return (
    <Stack.Navigator lazy={false} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" component={SingInPage} />
      <Stack.Screen name="sign-up" component={SingUpPage} />
    </Stack.Navigator>
  );
}

export function FeedStack() {
  return (
    <Stack.Navigator lazy={false} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feed" component={FeedPage} />
      <Stack.Screen name="productDetail" component={ProductDetailPage} />
    </Stack.Navigator>
  );
}


export function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="feedStack"
        component={FeedStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home-outline"
              color={color}
              size={size}
              type="ionicon"
            />
          ),
        }}
      />
      <Tab.Screen
        name="addProduct"
        component={AddProductPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-outline" color={color} size={size} type="ionicon" />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="person-circle"
              color={color}
              size={size}
              type="ionicon"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
