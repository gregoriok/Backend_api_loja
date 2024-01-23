import path from 'path';

class ImageController {
  static serveImage(req, res) {
    const imageName = req.params.imageName;
    const imagePath = path.join(process.cwd(), 'uploads/', imageName);

    console.log(imagePath)
    res.sendFile(imagePath, (err) => {
      if (err) {
        res.status(404).send('Imagem não encontrada');
      }
    });
  }
}

export default  ImageController;