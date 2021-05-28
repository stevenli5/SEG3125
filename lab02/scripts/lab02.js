function selectTab(tabIndex) {
    //Hide All Tabs
    document.getElementById('content1').style.display="none";
    document.getElementById('content2').style.display="none";
    document.getElementById('content3').style.display="none";
    
    //Show the Selected Tab
    document.getElementById('content' + tabIndex).style.display="block";  
  }