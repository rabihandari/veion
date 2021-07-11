import multer from 'multer';
import { v4 as UUID } from 'uuid';

// Profile Pictures Storage
export const cv_storage = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, process.cwd() + '/temp')
        },
        filename: (req, file, cb) => {
            const { originalname } = file;
            cb(null, `${UUID()}-${originalname}`);
        }
    }) 
});



