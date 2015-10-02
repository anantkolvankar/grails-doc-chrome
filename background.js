function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'Go to grails doc version: %s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  // Suggestion code will end up here.
});

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("http://grails.github.io/grails-doc/" + text);
});

