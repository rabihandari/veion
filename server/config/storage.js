import multer from 'multer';
import { v4 as UUID } from 'uuid';

// CV & Quote Storage
export const filesStorage = multer({ 
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



