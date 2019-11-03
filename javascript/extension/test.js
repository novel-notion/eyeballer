//popup.js

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick() {

        //what happens if button is clicked
        //select shortcuts by pressing on buttons

        //load content of current website
        chrome.tabs.query({active: true, currentWindow: true},
            
            function (tabs) { //gives us all the tabs that it matches

                //send id of tabs as message to content.js
                chrome.tabs.sendMessage(tabs[0].id, 'hi')

            })
    }
  }, false);