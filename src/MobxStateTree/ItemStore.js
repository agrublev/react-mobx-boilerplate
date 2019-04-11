import { types, getParent } from "mobx-state-tree";
import { Item } from "./ItemModel.js";

export const ItemStore = types
    .model({
        items: types.optional(types.array(Item), []),
        selectedItem: types.optional(
            types.union(types.safeReference(Item), types.literal(null)),
            null
        )
    })
    .views(self => ({
        get currentItem() {
            return self.selectedItem;
        }
    }))
    .actions(self => ({
        addItem(data) {
            // let itemRef = Item.create(data);
            // console.warn("-- Console ", itemRef);
            self.items.push(data);
        },
        selectItem(itemId) {
            self.selectedItem = itemId;
        }
    }));
