import { JSDOM } from "jsdom";
import { Scamper } from "scamper";

const dom = new JSDOM("<div id='output'></div>");
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
const outputPane: HTMLElement = dom.window.document.getElementById("output") ?? (() => {
    throw new Error("output pane must exist in jsdom")
})();

function runProgram(src: string): string {
    const scamper = new Scamper(outputPane, src, {
        isTracing: false, isPrintingCode: false, defaultDisplay: true
    });

    scamper.runProgram();

    return outputPane.outerHTML;
}

console.log(runProgram("(equal? 1 1)"))
