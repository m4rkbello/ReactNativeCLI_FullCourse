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


      {
        data < 30 ?
          <Text style={{ fontSize: 30 }}>OHAHAY!</Text>
          :
          <Text style={{ fontSize: 30 }}>AYAW KOL!!</Text>
      }
      <UserData />

    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>REUSABLE COMPONENT</Text>
      <Text style={{ fontSize: 30 }}>Name: PAT</Text>
      <Text style={{ fontSize: 30 }}>Name: TOTOYA</Text>
    </View>
  )
}

export default App;