class ApiResponse{
    constructor(
        statuscode,
        messege = "Success" ,
        data
    ){
        this.statuscode - statuscode,
        this.data = data,
        this.messege = messege,
        this.success - statuscode < 400
    }
}

export {   ApiResponse }