document.addEventListener('DOMContentLoaded', function() {
    var switcher = document.getElementById('checkboxSwitcher');
    
    switcher.addEventListener('click', function() {
        document.querySelector('.slider').classList.toggle('active');
    });
});