interface returnResponse{
    status: "success" | "error",
    message: String,
    data: {} | []
};

export {returnResponse};