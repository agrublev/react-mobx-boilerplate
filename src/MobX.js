import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ItemStore } from "./MobxStateTree/ItemStore.js";

@inject("itemStore")
@observer
class MobX extends Component {
    componentDidMount() {
        const { itemStore } = this.props;
        itemStore.addItem({ id: "" + Date.now(), name: "Second Item" });
    }

    render() {
        const { itemStore } = this.props;

        return (
            <div className="MobX.js">
                {itemStore.items.map(item => (
                    <div style={{ padding: 5, border: "1px solid white" }} key={item.id}>
                        {item.name}
                        <button
                            onClick={() => {
                                // !IMPORTANT keep in mind mobx is ultra smart and will NOT
	                            // re-render this entire component if we made each item a separate component
                                item.updateName(item.name + " - " + Date.now());
                            }}
                        >
                            Append to name
                        </button>
                    </div>
                ))}
                <button
                    onClick={() => {
                        itemStore.addItem({
                            id: "" + Date.now(),
                            name: "Item #" + (itemStore.items.length + 1)
                        });
                    }}
                >
                    ADD ITEM
                </button>
                <span>{this.value}</span>
            </div>
        );
    }
}

export default MobX;
