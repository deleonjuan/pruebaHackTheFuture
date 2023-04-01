import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { UtilityThemeProvider } from "react-native-design-utility";
import { BottomNavigator, UnloggedStack } from "./navigation";

import { useSelector } from "react-redux";

const Auth = () => {
  const { token } = useSelector((state) => state.authReducer);
  return <>{token ? <BottomNavigator /> : <UnloggedStack />}</>;
};

const App = () => {
  return (
    <Provider store={store}>
      <UtilityThemeProvider>
        <NavigationContainer>
          <Auth/>
        </NavigationContainer>
      </UtilityThemeProvider>
    </Provider>
  );
};

export default App;
