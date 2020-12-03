const Router = require("koa-router");
const article = require("../controllers/article")

const router = new Router({
    prefix: "/api/article"
});

router.get("/", async (ctx) => {
    const content = await article.findAll()
    ctx.body = content;
});

router.get("/searchOne", async (ctx) => {
    const content = await article.find(ctx.query.key, ctx.query.id)
    ctx.body = content;
});

module.exports = router.routes();