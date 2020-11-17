export interface SpecialityDetailModel
{
    DoctorList :Array<DoctorEntity>,
    OperationList :Array<Operation>,
    Speciality :Speciality,   
}
export interface Operation
{
    Active:boolean,
    Description:string,
    ImagePath:string,
    LanguageID:number,
    Name:string,
    OperationID:number,
    OperationOrder:number,
    SpecialityID:number
}
export interface Speciality 
{
    Active:boolean,
    Description:string,
    ImagePath:string,
    IsMedicalTourism:boolean,
    IsVideoConference:boolean,
    LanguageID:number,
    SpecialityID:number,
    SpecialityOrder:number,
    Title:string
}
export interface Hospital
{
    Active:boolean,
    Address:string,
    HospitalID:number,
    HospitalOrder:number,
    ImagePath:string,
    LanguageID:string,
    Name:string,
    Tel:string
}
export interface DoctorEntity
{
    AppointmentFeesCurrency:number,
    DoctorHospitals:Array<Hospital>

}