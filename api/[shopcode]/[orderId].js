export default function handler(req, res) {
  const { shopcode, orderId } = req.query;

  if (!shopcode || !orderId) {
    res.status(400).send("Missing shop or order ID");
    return;
  }

  let target = "";

  switch (shopcode.toUpperCase()) {
    case "JAR":
      target =
        "https://admin.shopify.com/store/le-meuble/apps/official-swiss-post-app/order/getorders/type/label" +
        "?shop=le-meuble.myshopify.com&ids%5B%5D=" +
        orderId;
      break;

    case "GAL":
      target =
        "https://admin.shopify.com/store/cb4c13-3/apps/official-swiss-post-app/order/getorders/type/label" +
        "?shop=cb4c13-3.myshopify.com&ids%5B%5D=" +
        orderId;
      break;

    case "LUM":
      target =
        "https://admin.shopify.com/store/jardin-confort/apps/official-swiss-post-app/order/getorders/type/label" +
        "?shop=jardin-confort.myshopify.com&ids%5B%5D=" +
        orderId;
      break;

    default:
      res.status(404).send("Unknown shop: " + shopcode);
      return;
  }

  res.redirect(302, target);
}
