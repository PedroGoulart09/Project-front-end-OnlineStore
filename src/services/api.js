export async function getCategories() {
  const URL = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const obj = await URL.json();
  return obj;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const obj = await URL.json();

  return obj;
}
