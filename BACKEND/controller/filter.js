const product = require("../model/productSchema");

const Productsfilter = async (query, category_name) => {
  const { search, category, sort, fields, numericFilters } = query;
  const queryObject = {};

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }
  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price"];
    filters = filters.split(",")

    filters = filters.forEach((item) => {
      const [field, operator, value] = item.split("-");

      if (options.includes(field)) {
        queryObject[field] = { ...queryObject[field],[operator]: Number(value) };
      }
    });
    console.log(queryObject.price);
  }
  if (category_name) {
    queryObject.category = category_name;
  }
  let result = product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else if (search) {
    result = result.sort({ name: { $regex: search, $options: "i" } ? -1 : 1 });
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
console.log(limit)
  result = result.skip((page - 1) * limit).limit(limit);

  const products = await result;
  return products;
};

module.exports = Productsfilter;
