import { TouchableOpacity, Text } from 'react-native';

import css from "../Style/ContactBtn";
import str from '../../../Global/Strings';

function Visitor() {
  return (
    <TouchableOpacity style={css.container}>
      <Text style={css.text}>{str.btn.contact}</Text>
    </TouchableOpacity>
  )
}

export default Visitor;