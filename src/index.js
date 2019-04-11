import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ItemStore } from "./MobxStateTree/ItemStore";
import { Provider } from "mobx-react";

const itemStore = ItemStore.create({ items: [{ id: "" + Date.now(), name: "First Item" }] });

ReactDOM.render(
	<Provider itemStore={itemStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
