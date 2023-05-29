/**
 * @file Manages the population of main>iframe when links in aside>ul>li are clicked
 * @description This file doesn't export anything, instead it registers a function to run window.onload
 * @created 2023-03-26
 * @author plundell
 */


/**
 * Get the first iframe element in the document or throw error
* @throws {Error} if no <iframe> is found in the document.
* @return {HTMLIFrameElement} 
*/
function getTargetIframe(): HTMLIFrameElement {
   const iframe = document.getElementsByTagName('iframe')[0];
   if (!iframe)
       throw new Error("No iframe found on page");
   return iframe;
}

/**
 * Build the href for a link
 * @param file The file to link to
 * @return string
 * @example buildHref('index.html') //=> 'http://localhost:8080/index.html'
 */
function buildHref(file: string): string {
    const base = location.href.split('#')[0] || ''
    return base.replace('.html', '/') + file;
}

/**
 * Get the name of a link from its innerHTML
 * @param [HTMLLIElement] li The link
 * @return string
 */
function getLinkName(li: HTMLLIElement): string {
    return li.innerHTML.toLowerCase().replace(" ", '-');
}

/**
 * Get a list of all links fron the sidebar
 * @return Array<HTMLLIElement>
 */
function getAllSidebarLinks(): Array<HTMLLIElement> {
    return Array.from(document.querySelectorAll('aside>ul.iframe-links>li'))
}

/**
 * Set click listeners on all the links on the sidebar so clicking them will change the url hash to match the name of the link
 * @return Array<HTMLLIElement>
 */
function setClickListenersOnAllLinks() {
    for (const li of getAllSidebarLinks()) {
        li.addEventListener('click', () => location.hash = getLinkName(li))
    }
}



/**
 * Sort an array of strings by length
 * @param {Array<string>} arr The array to sort
 * @returns {Array<string>}
 */
function sortByLength(arr: Array<string>): Array<string> {
    return arr.sort((a, b) => b.length - a.length);
}


/**
 * Highlight the link in the sidebar that matches the endpoint
 * @param {string} endpoint The name of the endpoint and shown in the sidebar.
 * @return void
 */
function highlightEndpoint(endpoint: string): void {
    const allLinks = getAllSidebarLinks();
    for (const li of allLinks) {
        if (getLinkName(li) == endpoint) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    }
}


function followHash() {
    if (location.hash.length > 1) {
        let endpoint = location.hash.substring(1);
        let file = endpoint + ".html";
        getTargetIframe().setAttribute('src', buildHref(file));
        highlightEndpoint(endpoint);
        console.log(endpoint)
    } else {
        highlightEndpoint('');
    }
}



//Setup this navigation when the page has loaded
addEventListener('load', function setupNavigation() {

    setClickListenersOnAllLinks();

    //start monitoring the window hash
    addEventListener("hashchange", followHash);

    //In case there is already a hash set, follow it
    followHash();
})
