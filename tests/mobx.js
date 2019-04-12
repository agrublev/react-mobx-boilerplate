const test = require("ava");
import { ItemStore } from "../src/MobxStateTree/ItemStore";
import { getSnapshot } from "mobx-state-tree";
const itemStore = ItemStore.create({ items: [{ id: "1555077182591", name: "First Item" }] });

let getSnapshotData = (toBeString = false) => {
	let snappy = getSnapshot(itemStore);
	return toBeString ? JSON.stringify(snappy) : snappy;
};
test.todo("Test real ajax!!!");

test("Adding a second item", t => {
	itemStore.addItem({ id: "1555077068319", name: "Second Item" });
	t.deepEqual(getSnapshotData(), {
		items: [
			{ id: "1555077182591", name: "First Item" },
			{ id: "1555077068319", name: "Second Item" }
		],
		selectedItem: null
	});
	t.is(itemStore.selectedItem, null);
});

test("Ajax request", async t => {
	t.plan(2);
	await itemStore.addItemAjax({ id: "3333333", name: "Third Item" });
	t.deepEqual(itemStore.items[2].toJSON(), { id: "3333333", name: "Third Item" });
	t.is(itemStore.items.length, 3);
});

test("Select first item to be stored as a reference from id", t => {
	itemStore.selectItem(itemStore.items[0].id);
	t.is(itemStore.selectedItem.name, "First Item");
});

test("Update our currently selected item's name", t => {
	let itemOne = itemStore.selectedItem;
	itemOne.updateName(itemOne.name + " - SEE");
	t.is(itemOne.name, "First Item - SEE");
});

test("SAME SNAPSHOT?", t => {
	t.snapshot(getSnapshotData());
});

test.after("cleanup", async t => {
	t.log("COMPLETED NOW NEXT");
});

test.before(t => {
	console.log("ABOUT TO START");
});
