import { TouchableOpacity, Text } from 'react-native';

import css from "../Style/CreateBtn";
import str from '../../../Global/Strings';

function Visitor() {
  return (
    <TouchableOpacity style={css.container}>
      <Text style={css.text}>{str.btn.create}</Text>
    </TouchableOpacity>
  )
}

export default Visitor;