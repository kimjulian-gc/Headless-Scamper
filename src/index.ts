import { JSDOM } from "jsdom";
import { Scamper } from "scamper";

function throwNullError(element: string): never {
    throw new Error(`${element} was null`);
}

const dom = new JSDOM("<div id='output'></div>");
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
const outputPane = dom.window.document.getElementById("output")
    ?? throwNullError("output pane");

function runProgram(src: string) {
    const scamper = new Scamper(outputPane, src, {
        isTracing: false, isPrintingCode: false, defaultDisplay: true
    });

    scamper.runProgram();

    const outputChildren = Array.from(outputPane.children);
    const scamperOutput = outputChildren.find(
        (value) => value.className === "scamper-output"
    ) ?? throwNullError("scamper output");

    return scamperOutput.textContent ?? throwNullError("scamper text");
}

console.log(runProgram("(equal? 1 1)"))