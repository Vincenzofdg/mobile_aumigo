import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

import css from "../Style/LogInBtn";
import str from "../../../Global/Strings";

function LogIn() {
  const { navigate } = useNavigation();

  const handlePress = () => navigate("LogIn")

  return (
    <TouchableOpacity style={css.container} onPress={handlePress}>
      <Text style={css.text}>{str.btn.login}</Text>
    </TouchableOpacity>
  )
}

export default LogIn;