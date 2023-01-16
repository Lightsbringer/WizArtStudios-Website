import { scanAssetsFolder } from '../services/imageLoader-service';
import { Request, Response } from 'express';
import CustomError from '../types/CustomError';

export default class ApiController {

    static loadWebsiteMedia(req: Request, res: Response) {
        const imageData = scanAssetsFolder();

        if(imageData.length === 0)
            return res.status(404).send(new CustomError(404, 'Failed to retrieve website resources'));

        return res.status(200).json(imageData);
    }
}