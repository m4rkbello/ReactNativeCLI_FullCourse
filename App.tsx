import React from "react";
import { Text, View, Button } from 'react-native';

const App = () => {
  let choy = "AYAW KOL BATA PAKO KOL!";
  return (
    <View>

      <Text style={{ fontSize: 50 }}>
        ULOL  HAHAAAA!
      </Text>
      <Text style={{ fontSize: 50 }}>
        PADAYON BUGO!
      </Text>
      {/** SELF CLOSING TAG */}
      <Button title='CLICK ME' color={"violet"} />
      <Text style={{ fontSize: 30 }}>{choy}</Text>

    </View>
  );
}

export default App;