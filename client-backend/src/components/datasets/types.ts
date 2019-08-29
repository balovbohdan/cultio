export type Props = {
    items?:null|Item[];
};

export type ItemsProps = {
    items:Item[];
};

export type Item = {
    id:number;
    img:string;
    descr:string;
    title:string;
};