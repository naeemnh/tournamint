const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware(["/api/**", "/auth/**"], {
			target: "http://localhost:3001",
			changeOrigin: true,
			headers: {
				Connection: "keep-alive",
			},
		})
  )
}