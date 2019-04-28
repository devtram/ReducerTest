import React from "react";
import { View } from "react-native";
//Redux specific
import { Provider } from "react-redux";
import { createStore } from "redux";
//Get Reducers
import reducers from "./src/reducers";
//Get the Header Component
import { Header } from "./src/common";
// import LibraryList from "./components/LibraryList";

const App = () => {
return (
// Provider can only have one child component
<Provider store={createStore(reducers)}>
<View>
<Header headerText="Redasdfasdfux Demo -- Tech Stack" />
<Text>fsdafsdasadsfsdfsdafdf</Text>
{/* <LibraryList /> */}
</View>
</Provider>
);
};

export default App;


