import { Provider } from "mobx-react";
const test = require("ava");

import React from "react";
import render from "react-test-renderer";
import HelloWorld from "./lib/Component.js";
import MobX from "../src/MobX.js";

import { ItemStore } from "../src/MobxStateTree/ItemStore";
import { getSnapshot } from "mobx-state-tree";
const itemStore = ItemStore.create({ items: [{ id: "1555077182591", name: "First Item" }] });

test("HelloWorld component", t => {
	const tree = render.create(<HelloWorld />).toJSON();
	//$ ava --update-snapshots
	t.snapshot(tree);
});
test("MobX component", t => {
	const tree = render
		.create(
			<Provider itemStore={itemStore}>
				<MobX />
			</Provider>
		)
		.toJSON();
	t.snapshot(tree);
});
