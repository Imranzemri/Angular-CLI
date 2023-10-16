import { JsonProperty } from 'json2typescript';

export class Shipment {

    constructor() {}

 

   

       

        // Name!: string;

        // ShipmentNo!: number;

        // Piece!: number;

        // Dimension!: number;

        // Weight!:number;

        // Location!:string;

        // Note!:string;

        // FileName!:string;

        // Images!:Array<string>;

        // Email!:string;

        // CustomRecipient!:string;

       

 

        @JsonProperty('Name', String)

        public Name: string = '';

       

        @JsonProperty('ShptNmbr', String)

        public ShptNmbr: string = '';

       

        @JsonProperty('Dmnsn', Number)

        public Dmnsn: number | null = null;

       

        @JsonProperty('Wght', Number)

        public Wght: number | null = null;

       

        @JsonProperty('Locn', String)

        public Locn: string | null = null;

       

        @JsonProperty('Note', String)

        public Note: string | null = null;

       

        @JsonProperty('Imgs', String)

        public Imgs: string | null = null;

       

        @JsonProperty('Rpnt', String)

        public Rpnt: string | null = null;

       

        @JsonProperty('CstmRpnt', String)

        public CstmRpnt: string | null = null;

       

        @JsonProperty('Qnty', Number)

        public Qnty: number | null = null;

       

 

   

}