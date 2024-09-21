import { SafeAreaView, View } from 'react-native';

import LogIn from "./Button/LogIn";
import Create from "./Button/CreateBtn";
import Contact from "./Button/Contact";
import css from "./Style/Screen";

import Background from "../../Components/Background";

function Cover() {
  return (
    <>
      <Background name="cover" />
      <SafeAreaView style={css.container}>
        <View style={css.buttons}>
          <LogIn />
          <Create />
          <View style={css.bar} />
          <Contact />
        </View>
      </SafeAreaView>
    </>
  )
}

export default Cover;