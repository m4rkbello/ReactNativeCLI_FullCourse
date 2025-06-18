import React from "react";
import { Text, View, Button } from 'react-native';

const App = () => {

  let choy = "AYAW KOL BATA PAKO KOL!";
  let fname = "MARK";
  let lname = "BELLO";
  const data = 30;


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
      <Text style={{ fontSize: 30 }}>{fname + " " + lname}</Text>
      <Text style={{ fontSize: 30 }}>{data === 30 ? "TAMA ANG BOANG!" : "AYAW KOL!"}</Text>

    </View>
  );
}

export default App;