import { View, TextInput, Image } from 'react-native';

import css from "../Style/NameInput";

import Imgs from '../../../Global/Images';
import str from '../../../Global/Strings';

function Name() {
  return (
    <View style={css.container}>
      <Image style={css.icon} source={Imgs.useIcon} />
      <TextInput style={css.input} placeholder={str.placeholders.user} />
    </View>
  )
}

export default Name;