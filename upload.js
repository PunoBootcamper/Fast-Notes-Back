import multer from 'multer';
import path from 'path';

// Configurar el almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

// Filtrar el tipo de archivo
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(new Error('Solo se permiten imágenes (jpeg, jpg, png, gif)'));
};

// Middleware de Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Límite de 5 MB
  fileFilter,
});

export default upload;
