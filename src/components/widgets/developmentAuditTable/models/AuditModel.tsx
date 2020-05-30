export default class AuditModel {

    rowNumber: number;
    datetime : Date;
    message: string;

    constructor(rowNumber: number, message : string) {
        this.rowNumber = rowNumber;
        this.datetime = new Date();
        this.message = message;
    }
}