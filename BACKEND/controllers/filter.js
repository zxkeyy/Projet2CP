const product = require('../models/product')

const Productsfilter = async (query,category_name)=>{
    const {name ,category ,sort ,fields ,numericFilters} = query
    const queryObject = {}

    if(name){
        queryObject.name={$regex: name, $options: 'i' }
    }
    if(category){
        queryObject.category={$regex: category, $options: 'i' }
    }
    if (numericFilters) {
        const operatorMap = {
          '>': '$gt',
          '>=': '$gte',
          '=': '$eq',
          '<': '$lt',
          '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
          regEx,
          (match) => `-${operatorMap[match]}-`
        );
        const options = ['price'];
        filters = filters.split(',').forEach((item) => {
          const [field, operator, value] = item.split('-');
          if (options.includes(field)) {
            queryObject[field] = { [operator]: Number(value) };
          }
        });
      }
      if(category_name){
        queryObject.category=category_name
      }
      console.log(queryObject)
      let result = product.find(queryObject);
      
      if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
      } else {
        result = result.sort('createdAt');
      }
      if(fields){
        fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
      }

      const page = Number(query.page) || 1
      const limit = Number(query.limit) || 10

      result = result.skip((page-1)*limit).limit(limit)


      const products = await result
      return products
    }

    module.exports = Productsfilter