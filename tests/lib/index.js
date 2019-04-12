"use strict";

const { test } = require("ava");
// https://github.com/avajs/ava/blob/HEAD/docs/03-assertions.md
const PuppeteerInstagram = require("./instagram.js");
test.after("cleanup", t => {
	console.log("AL AFTTT");
	t.log("AL A232323FTTT");
});

test.before(t => {
	console.log("AL AFFF2211F");
});

test("basic", async t => {
	const instagram = new PuppeteerInstagram({
		puppeteer: { headless: false }
	});
	console.log("524352345 AFFF2211F");
	await instagram.signin({ username: "agrublev", password: "xxx" });
	await instagram.close();
	t.pass();
});

test.todo("will think about writing this later");

//   // const instagram = new PuppeteerInstagram()
//   // t.is(instagram.isAuthenticated, false)
//   // t.is(instagram.user, null)
//
// })
//https://github.com/avajs/ava/blob/HEAD/docs/06-configuration.md
