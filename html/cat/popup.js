document.querySelector('button').addEventListener('click', onclick, false)
 
  function onclick () {
     chrome.tabs.create({url: 'config.html'})
	})
  }
