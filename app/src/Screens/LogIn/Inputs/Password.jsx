import { useState } from 'react';

import { View, TextInput, Image, TouchableOpacity } from 'react-native';

import css from "../Style/PasswordInput";

import Imgs from '../../../Global/Images';
import str from '../../../Global/Strings';

function Password() {
  const [eye, setEye] = useState(false);
  return (
    <View style={css.container}>
      <Image style={css.icon} source={Imgs.passwordIcon} />
      <TextInput style={css.input} placeholder={str.placeholders.password} />
      <TouchableOpacity onPress={() => setEye(p => !p)}>
        <Image style={css.icon} source={!eye ? Imgs.eyeClose : Imgs.eyeOpen} />
      </TouchableOpacity>
    </View>
  )
}

export default Password;