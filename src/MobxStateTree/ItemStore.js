import { types, getParent, flow } from "mobx-state-tree";
import { Item } from "./ItemModel.js";

export const ItemStore = types
	.model({
		items: types.optional(types.array(Item), []),
		selectedItem: types.optional(
			types.union(types.safeReference(Item), types.literal(null)),
			null
		)
	})
	// istanbul ignore next
	.views(self => ({
		/* istanbul ignore <get> [non-word] */
		get currentItem() {
			return self.selectedItem;
		}
	}))
	// istanbul ignore next
	.actions(self => ({
		addItem(data) {
			self.items.push(data);
		},
		addItemAjax: flow(function* addItemAjax(item) {
			yield new Promise(async resolve => {
				await setTimeout(() => {
					self.addItem(item);
					resolve();
				}, 1200);
			});
		}),
		selectItem(itemId) {
			self.selectedItem = itemId;
		}
	}));
