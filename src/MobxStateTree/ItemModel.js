import { types } from "mobx-state-tree";

export const Item = types
    .model({
        id: types.optional(types.identifier, ""),
        name: types.string
    })
    .views(self => ({
        get nameLowerCase() {
            return self.name.toLowerCase();
        }
    }))
    .actions(self => ({
        updateName(newName) {
            self.name = newName;
        }
    }));
