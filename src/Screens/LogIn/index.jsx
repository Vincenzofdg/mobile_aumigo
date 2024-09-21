import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import css from "./Style/Screen";
import Name from "./Inputs/Name";
import Password from "./Inputs/Password";
import Background from "../../Components/Background";
import str from "../../Global/Strings";

function LogIn() {
  return (
    <>
      <Background name="login" />
      <SafeAreaView style={css.container}>
        <Name />
        <Password />
        <View style={css.textContainer}>
          <Text style={css.normalText}>{str.forgotPassword}</Text>
          <TouchableOpacity>
            <Text style={css.textPress}>{str.clickHere}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={css.btn}>
          <Text style={css.btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

export default LogIn;