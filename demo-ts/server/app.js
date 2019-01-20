const path = require("path");
const Koa = require("koa");
const views = require("koa-views");
const static = require("koa-static");
const app = new Koa();

const bodyParser = require("koa-bodyparser");

const port = 8090;
app.use(bodyParser());
app.use(views(path.join(__dirname, "dist"), { map: { html: "nunjucks" } }));
app.use(static(path.join(__dirname + "dist")));
app.use(require("./router").routes());

app.listen(port);

console.info(`http://localhost:${port}/index`);
console.log("启动成功");