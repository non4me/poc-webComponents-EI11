var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a class for the element
var WordCount = /** @class */ (function (_super) {
    __extends(WordCount, _super);
    function WordCount() {
        var _this = 
        // Always call super first in constructor
        _super.call(this) || this;
        // count words in element's parent element
        var wcParent = document.querySelector(_this.getAttribute('for'));
        function countWords(node) {
            var text = node.innerText || node.textContent;
            return text.toString().trim().split(/\s+/g).length;
        }
        var count = "Words: " + countWords(wcParent);
        // Create a shadow root
        var shadow = _this.attachShadow({ mode: 'open' });
        // Create text node and add word count to it
        var text = document.createElement('span');
        text.textContent = count;
        // Append it to the shadow root
        shadow.appendChild(text);
        // Update count when element content changes
        setInterval(function () {
            var count = "Words: " + countWords(wcParent);
            text.textContent = count;
        }, 200);
        return _this;
    }
    return WordCount;
}(HTMLElement));
// Define the new element
customElements.define('word-count', WordCount);
