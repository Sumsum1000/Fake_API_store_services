import loadJson from 'load-json-file';

let categories = loadJson.sync('./data/Categories.json');

export function getCategories () {
    return categories;
}

export function addCategory (category) {
    categories.push(category);
}

export function deleteCategory (deleteCategory) {
    categories = categories.filter(category => category != deleteCategory);
}
