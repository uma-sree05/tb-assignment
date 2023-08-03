function displayContentInNewTab() {
    // Get the content you want to display in the new tab
    var contentToDisplay = document.getElementById('ConditionsList').innerHTML;

    // Open a new tab
    var newTab = window.open();

    // Write the content to the new tab
    newTab.document.write('<h1>Terms & Conditions</h1>' + contentToDisplay);
    newTab.document.close();
}