import React, { Component } from "react";
import "./App.less";
import { observer } from "mobx-react";
import { observable } from "mobx";
import MobX from "./MobX";

@observer
class App extends Component {
	// Better than state
	@observable iChange = "52" + Date.now();

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<button
						onClick={() => {
							this.iChange = "52" + Date.now();
						}}
					>
						CHANGE {this.iChange}
					</button>
					<MobX />
				</header>
			</div>
		);
	}
}

export default App;
