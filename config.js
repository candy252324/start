requirejs.config({
	baseUrl:"./js",
	paths:{
		"jquery":"lib/jquery.min"
	}
});
requirejs(["./entry.js"])
