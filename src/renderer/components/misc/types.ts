interface IDropdown {
label:string;
value:string;
}

interface INumberInput{
    label:string;
    value:number;
}
interface ITextInput{
    label:string,
    ref:React.RefObject<HTMLInputElement>,
    value:string,
    setter:(e:string)=>void
}
interface IToggleSwitch{
    setter: (e:boolean)=>void;
    label:string;
    value: boolean;
}
export {IDropdown, INumberInput, ITextInput,IToggleSwitch};