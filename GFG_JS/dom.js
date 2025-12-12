//factors
/* 1. html parsing
2.script download
3. script execution 
*/

/* default - the parsing of the HTML is blocked until the JavaScript file is fetched and executed, 
1. html parser
2. html parsing pause
3. script download
4. script execution completed
5. html parsing resume and finish
*/

/* async - the browser to download the script asynchronously while parsing the HTML document. The script is downloaded in the background without blocking the HTML parsing process.

Once the script is downloaded, it's executed asynchronously, meaning it can run at any time, even before the HTML document has finished parsing.
1. html parser
2. parallel start script downlaod
3. script download completed
4. html parsing pause
5. script execution
6. html parse resume and finish
*/

/* defer - tells the browser to download the script asynchronously while parsing the HTML document.
the execution of the script is deferred until after the HTML document has been parsed.
1. html parser
2. parallel start script downlaod
3. script download completed
4. html parse resume and finish
5. script execution
*/
