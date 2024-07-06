function toggleAccordion(index) {
    var content = document.getElementById('content-' + index);
    var icon = document.getElementById('icon-' + index);

    if (content.style.display === 'block') {
        content.style.display = 'none';
        content.style.height = '0';
        content.style.padding = '0 10px';
        icon.classList.remove('rotate');
    } else {
        // Hide all other sections
        var allContents = document.querySelectorAll('.accordion-content');
        allContents.forEach(function (element) {
            element.style.display = 'none';
            element.style.height = '0';
            element.style.padding = '0 10px';
        });

        // Remove rotate class from all icons
        var allIcons = document.querySelectorAll('.fa-angle-up');
        allIcons.forEach(function (icon) {
            icon.classList.remove('rotate');
        });

        content.style.display = 'block';
        content.style.height = content.scrollHeight + 'px';
        content.style.padding = '10px';
        icon.classList.add('rotate');
    }
}