import { EventEmitter, OnInit } from '@angular/core';
export declare class CheckboxPillComponent implements OnInit {
    inputArray: Array<Object>;
    inputArrayName: string;
    viewMode: boolean;
    pillsSelected: Array<String>;
    pillIdVariable: string;
    pillTextVariable: string;
    activePillBGColor: string;
    activePillFontColor: string;
    pillsSelectedChange: EventEmitter<Object>;
    pillsArray: any;
    outputArray: any[];
    someArray: any[];
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    changeInCheck(event: any, data: any): void;
    setUncheckedStyle(): {
        'color': string;
        'border-color': string;
    };
    setCheckedStyle(): {
        'color': string;
        'background': string;
    };
}
