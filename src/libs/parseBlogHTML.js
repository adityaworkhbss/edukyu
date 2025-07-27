// src/libs/parseBlogHTML.js
export function parseBlogHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    return {
        content: doc.querySelector(".blog-main")?.innerHTML || "",
        recommendations: doc.querySelector(".blog-recommendations")?.innerHTML || "",
        keywords: doc.querySelector(".blog-keywords")?.innerHTML || "",
        cards: doc.querySelector(".blog-cards")?.innerHTML || "",
    };
}
