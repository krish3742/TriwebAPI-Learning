import { RequestHandler } from "express"
import Report from "../models/report";
import ProjectError from "../helpers/projectError";
import { returnResponse } from "../utils/interfaces";

const getReport: RequestHandler = async (req, res, next) => {
    let resp: returnResponse;
    try {
        let reportId = req.params.reportId;
        let userId = req.userId;
        let report;
        if(!reportId) {
            report = await Report.find({userId}, {createdAt: 0, updatedAt: 0, __v: 0});
            if(report.length == 0) {
                const err = new ProjectError("No report available!");
                err.statusCode = 404;
                throw err;
            }
        } else {
            report = await Report.findById(reportId, {createdAt: 0, updatedAt: 0, __v: 0});
            if(!report) {
                const err = new ProjectError("Report not found!");
                err.statusCode = 404;
                throw err;
            } else if(report.userId != userId) {
                const err = new ProjectError("You are not authorized!");
                err.statusCode = 403;
                throw err;
            }
        }
        resp = {
            status: "success",
            message: "Report fetched!",
            data: report
        }
        res.send(resp);
    } catch (error) {
        next(error);
    }
};

export { getReport };