ANIME WEB APP WITH REACT NATIVE

# STACK SCREEN FLICKERING ISSUE ON SWTICHING SCREENS FIX
- <Stack.Navigator
  screenOptions={({ navigation }) => {
    return {
      detachPreviousScreen: !navigation.isFocused(),
    }
  }}
>



# Hiding tab bar in specific screens
link = https://reactnavigation.org/docs/hiding-tabbar-in-screens/

# React Navigation header title in nested tab navigator
- rendering different headerTitles for tab screens nested in a stack screen
-> stack overflow (last solution by wael) - https://stackoverflow.com/questions/60363195/react-navigation-header-title-in-nested-tab-navigator

-> official documentation - https://reactnavigation.org/docs/screen-options-resolution/
