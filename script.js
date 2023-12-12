function showTab(tabName) {
    document.querySelectorAll('.mainContent > div').forEach(tab => {
        tab.style.display = 'none';
    });

   
    document.getElementById(tabName).style.display = 'block';
}