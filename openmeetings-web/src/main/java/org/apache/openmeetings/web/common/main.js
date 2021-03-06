/* Licensed under the Apache License, Version 2.0 (the "License") http://www.apache.org/licenses/LICENSE-2.0 */
var isRtl = "rtl" === $('html').attr('dir');

Wicket.BrowserInfo.collectExtraInfo = function(info) {
	const l = window.location;
	info.codebase = l.origin + l.pathname;
	info.settings = JSON.stringify(getSettings());
};
function getSettings() {
	let s = localStorage.getItem("openmeetings");
	if (!!s) {
		s = JSON.parse(s);
	}
	return s || {};
}
function saveSetting(name, val) {
	const s = getSettings();
	s[name] = val;
	localStorage.setItem("openmeetings", JSON.stringify(s));
}
