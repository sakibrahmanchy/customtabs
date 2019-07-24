var links = [].slice.call(document.getElementsByClassName("link"));
var tabs = [].slice.call(document.getElementsByClassName("tab"));
links.forEach((link, index) => {
    link.addEventListener('click', function() {
        makeTabActive(index);
    })
})

makeTabActive = function(index) {
    makeActive(links, index);
    makeActive(tabs, index);
}

makeActive = function(collection, index) {
    collection[index].classList.add('active');
    collection.forEach(function(current_element, current_index) {
        if (index !== current_index)
            if (current_element.classList.contains('active'))
                current_element.classList.remove('active');
    });
}