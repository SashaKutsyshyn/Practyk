import dbConnect from "../../../utils/dbConnect";
import Place from "../../../models/Place";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const places = await Place.find({});
            
                res.status(200).json({ success: true, data: places });
            } catch (error) {
                res.status(400).json({ success: false});
            }
        case 'POST':
            try {
                const place = await Place.create(req.body);

                res.status(201).json({success: true, data: place});
            } catch (error) {
                res.status(400).json({success: false})
            }
        default:
            res.status(400).json({success: false})
        break;
    }

}