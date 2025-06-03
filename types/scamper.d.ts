declare module 'scamper' {
    export interface ScamperOptions {
        isTracing: boolean;
        isPrintingCode: boolean;
        initialEnv?: any; // not typing this because we don't need it
        defaultDisplay: boolean;
    }

    export class Scamper {
        env: any; // not typing this because we don't need it
        display: HTMLElement;
        isTracing: boolean;
        prog: any; // not typing this because we don't need it
        sem: any; // not typing this because we don't need it

        constructor(display: HTMLElement, src: string, opts: ScamperOptions);

        runProgram(): void;
        stepProgram(): void;
        stepStmtProgram(): void;
    }

    export function mkOptions(): ScamperOptions;

    export const builtinLibs: any; // not typing this because we don't need it
    export const Prelude: {
        lib: any[];
        initializer?: () => void;
    };
}