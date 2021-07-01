/* global CONFIG */

/**
 * 显示一句话
 * @param {string} content
 * @param {string} author
 * @param {string} from
 */
function say(content, author, from) {
  document.querySelector("#say-content").innerText = content;
  if (author) {
    document.querySelector("#say-author").innerText = author;
  }
  if (from) {
    document.querySelector("#say-from").innerText = "「" + from + "」";
  }