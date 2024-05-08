(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver(i => { for (const a of i) if (a.type === "childList") for (const s of a.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s) }).observe(document, { childList: !0, subtree: !0 }); function r(i) { const a = {}; return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a } function n(i) { if (i.ep) return; i.ep = !0; const a = r(i); fetch(i.href, a) }
})(); var yi = {};