const getTheTitles = function(arr) {
    let titles = [];
    for (let key in arr){
        titles.push(arr[key].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
