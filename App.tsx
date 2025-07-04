import React from "react";
import { Text, View, Button, ScrollView } from 'react-native';
import ComponentData from "./components/ComponentData";
import ButtonAndOnPressEvents from "./components/ButtonAndOnPress";
import UseStateComponent from "./components/UseStateComponent";
import PropsParentComponent from "./components/PropsComponent";
import StyleComponent from "./components/StylesComponent";
import TextInputComponent from "./components/TextInputComponent";
import FormComponent from "./components/FormComponent";
import FlatListComponent from "./components/FlatListComponent";
import CustomListComponent from "./components/CustomListComponent";
import DynamicGridComponent from "./components/DynamicGridComponent";
import GridComponent from "./components/GridComponent";

const App = () => {

  let choy = "AYAW KOL BATA PAKO KOL!";
  let fname = "MARK";
  let lname = "BELLO";
  const data = 30;


  return (
    <View>
      <ScrollView>

        {/* 
        <Text style={{ fontSize: 50 }}>
          ULOL  HAHAAAA!
        </Text>
        <Text style={{ fontSize: 50 }}>
          PADAYON BUGO!
        </Text>
 
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
        {
          data < 30 ?
            <Text style={{ fontSize: 30 }}>OHAHAY!</Text>
            :
            <Text style={{ fontSize: 30 }}>AYAW KOL!!</Text>
        }
        {
          data < 30 ?
            <Text style={{ fontSize: 30 }}>OHAHAY!</Text>
            :
            <Text style={{ fontSize: 30 }}>AYAW KOL!!</Text>
        }
        {
          data < 30 ?
            <Text style={{ fontSize: 30 }}>OHAHAY!</Text>
            :
            <Text style={{ fontSize: 30 }}>AYAW KOL!!</Text>
        }
        <ComponentData />
        <ListProgrammers />
        <ButtonAndOnPressEvents />
        <UseStateComponent />

        <PropsParentComponent />
        */}

        {/* <StyleComponent />
        <TextInputComponent /> */}
        {/* <FormComponent /> */}
        {/* <FlatListComponent /> */}
        {/* <CustomListComponent /> */}
        {/* <DynamicGridComponent /> */}
        <GridComponent />
      </ScrollView>
    </View>
  );
};

const ListProgrammers = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>MARK BELLO 1</Text>
      <Text style={{ fontSize: 30 }}>MARK BELLO 2</Text>
      <Text style={{ fontSize: 30 }}>MARK BELLO 3</Text>
      <ComponentData />
    </View>
  )
}


export default App;