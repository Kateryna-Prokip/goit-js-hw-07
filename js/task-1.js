const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log("Numbers of categories:", categoriesItems.length);

categoriesItems.forEach((category) => {
    const categoryText = category.querySelector('h2').textContent;
    console.log("Category:", categoryText);
    const categoryNumbers = category.querySelectorAll('li').length
    console.log("Elements:", categoryNumbers);
});
