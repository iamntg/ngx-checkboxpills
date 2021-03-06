import { Component, Output, EventEmitter, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-checkbox-pill',
    templateUrl: './checkbox-pill.component.html',
    styleUrls: ['./checkbox-pill.component.scss']
})
export class CheckboxPillComponent implements OnInit {
    @Input() inputArray: Array<Object>;
    @Input() inputArrayName: string;
    @Input() viewMode: boolean;
    @Input() pillsSelected: Array<String>;
    @Input() pillIdVariable: string;
    @Input() pillTextVariable: string;
    @Input() activePillBGColor: string = '#712626';
    @Input() activePillFontColor: string = '#fff';
    @Output() pillsSelectedChange = new EventEmitter<Object>();
    @ViewChild('pillsArray') pillsArray;
    outputArray = [];
    someArray = [];
    constructor() {

    }

    ngOnInit() {
        ////console.log("pillIdVariable ", this.pillIdVariable);
        //console.log("pillTextVariable ", this.pillTextVariable);
        //console.log("inputArray ", JSON.stringify(this.inputArray));
        this.inputArrayName = (this.inputArrayName) ? this.inputArrayName : '';
        //console.log("pillsArray ", this.pillsArray);
        if (this.pillsSelected && this.pillsSelected.length) {
            this.outputArray = this.pillsSelected;
        }
    }

    ngOnChanges(changes) {
        if (this.pillsSelected.length == 0) {
            setTimeout(() => {
                let pillsArrayDivs = this.pillsArray.nativeElement.parentElement.children;
                for (let inc = 0, pillsDivslength = pillsArrayDivs.length; inc < pillsDivslength; inc++) {
                    pillsArrayDivs[inc].children.pillGroup.checked = false;
                }
            }, 500);
        }
    }

    ngAfterViewInit() {
        //console.log("inputArray ", this.inputArray);
        let pillsArrayDivs = this.pillsArray.nativeElement.parentElement.children;
        for (let inc = 0, pillsDivslength = pillsArrayDivs.length; inc < pillsDivslength; inc++) {
            let pillSelIndex = this.pillsSelected.indexOf(pillsArrayDivs[inc].children.pillGroup.value);
            if (pillSelIndex > -1) {
                pillsArrayDivs[inc].children.pillGroup.checked = true;
                //console.log(pillsArrayDivs[inc].children);
                //console.log(pillsArrayDivs[inc].children.pillGroup.nextElementSibling.style);
                pillsArrayDivs[inc].children.pillGroup.nextElementSibling.style.background = this.activePillBGColor;
                pillsArrayDivs[inc].children.pillGroup.nextElementSibling.style.color = this.activePillFontColor;
            }
        }
    }

    changeInCheck(event, data) {
        //console.log("event ", event);
        //console.log("this.inputArray ", this.inputArray);
        //console.log("this.pillsSelected ", this.pillsSelected);
        if (event.srcElement.checked) {
            this.outputArray.push(data[this.pillIdVariable]);
            event.srcElement.nextElementSibling.style.background = this.activePillBGColor;
            event.srcElement.nextElementSibling.style.color = this.activePillFontColor;
        } else {
            let outputArrIndex = this.outputArray.indexOf(data[this.pillIdVariable]);
            //console.log("outputArrIndex ", outputArrIndex);
            this.outputArray.splice(outputArrIndex, 1);
            event.srcElement.nextElementSibling.style.background = '';
            event.srcElement.nextElementSibling.style.color = this.activePillBGColor;
        }
        //console.log("data ", data);

        //console.log("this.outputArray ", this.outputArray);
        this.pillsSelectedChange.emit(this.outputArray);
    }

    setUncheckedStyle() {
        let styles = {
            'color': this.activePillBGColor,
            'border-color': this.activePillBGColor
        };
        return styles;
    }

    setCheckedStyle() {
        let styles = {
            'color': this.activePillFontColor,
            'background': this.activePillBGColor
        };
        return styles;
    }


}
