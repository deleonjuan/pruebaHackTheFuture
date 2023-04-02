import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { UtilityThemeProvider } from "react-native-design-utility";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/store";
import { BottomNavigator, UnloggedStack } from "./navigation";

import { useSelector } from "react-redux";

const Auth = () => {
  const { token } = useSelector((state) => state.authReducer);
  return <>{token ? <BottomNavigator /> : <UnloggedStack />}</>;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UtilityThemeProvider>
          <NavigationContainer>
            <Auth />
          </NavigationContainer>
        </UtilityThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
