export type Endpoint = {
    method:string;
    condition:string|RegExp;
    createListener:(props:EndpointProps)=>(req, res)=>void;
};

export type EndpointProps = {
    devMode:boolean;
};