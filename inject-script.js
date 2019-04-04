/**
 *
 * Demo of loading a script cross origin
 *
 */
(function (d, e, a, t, h) {
  t = d.createElement(e);
  t.src = a;
  t.async = 1;
  t.defer = 1;
  h = d.getElementsByTagName(e)[0];
  h.parentNode.insertBefore(t,h);
})(window.document, 'script', 'https://raw.githubusercontent.com/nathanstilwell/nathanstilwell.github.com/fd9dd7d5/js/death.js')
