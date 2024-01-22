import { View, TextInput, Image } from 'react-native';

import css from "../Style/NameInput";

import Imgs from '../../../Global/Images';
import str from '../../../Global/Strings';

function Name({ action, value }) {
  return (
    <View style={css.container}>
      <Image style={css.icon} source={Imgs.useIcon} />
      <TextInput
        value={value}
        style={css.input}
        onChangeText={action}
        placeholder={str.placeholders.user}
      />
    </View>
  )
}

export default Name;