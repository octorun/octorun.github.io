import Clipboard from 'clipboard';

var pre = document.getElementsByTagName('pre');

for (var i = 0; i < pre.length; ++i) {
  var element = pre[i];
  var mermaid = element.getElementsByClassName('language-mermaid')[0];

  if (mermaid == null) {
    var btn = document.createElement('button');
    btn.className = 'btn btn-clipboard';
    btn.type = 'button';
    btn.innerHTML = 'Copy';
    element.insertAdjacentElement('afterbegin', btn);
  }
}

var clipboard = new Clipboard('.btn-clipboard', {
  target: function (trigger) {
    return trigger.nextElementSibling;
  },
});

clipboard.on('success', function (e) {
  e.trigger.innerHTML = 'Copied'
  e.trigger.classList.add('active')
  setTimeout(function () {
    e.trigger.classList.remove('active')
    e.trigger.innerText = 'Copy';
  }, 1200);

  e.clearSelection();
});

clipboard.on('error', function (e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
