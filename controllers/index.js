const items = [
    {id:1, name: 'Product1'},
    {id:2, name: 'Product2'},
    {id:3, name: 'Product3'},
    {id:4, name: 'Product4'},
    {id:5, name: 'Product5'},
    {id:6, name: 'Product6'}

]

const index = (req, res) =>{
    //res.send('hello World!!')
    res.render('index', {
        title: 'My WebStore'
    })
};

const getProducts = (req, res, next) => {
    res.render('products', {
        title:'List of products',
        items: items
    });
};

const newProducts = (req, res) => {
    //console.log(req.body);
    const {newItem} = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect('/products');
 };

module.exports = {
    index,
    getProducts,
    newProducts
}