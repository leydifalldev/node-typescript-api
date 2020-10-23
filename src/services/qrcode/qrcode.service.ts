const QRCode = require('qrcode')
import { response } from "express";
import { Uploader } from "../uploader/upload.service";
import { PassThrough } from 'stream';

interface IQRGeneratorParams {
  id: string
  categoryType: string
}

class QRCodeService {
  uploader: Uploader;

  constructor() {
    this.uploader = new Uploader();
  }

  async generate(data: any) {
    try {
      const qrStream = new PassThrough();
      
      await QRCode.toFileStream(qrStream, `${data}`, {
        color: {
          dark: '#FFFFFF',  // Blue dots
          light: '#0000' // Transparent background
        }
      })

      return qrStream;
    } catch(e) {
      return {
        status: 500,
        payload: null
      }
    }
  }

  async generateAndUpload (index: string, id: string) {
    try {
      const stream = await this.generate({ index, id });
      const response:any = await this.uploader.pushStreamToCloudinary(stream);
      const { eager, public_id } = response;
      const metaPicture = {
        id: public_id,
        mobile: eager[0].url,
        desktop: eager[0].url
      }
      
      return {
        status: 200,
        payload: metaPicture
      };
    } catch(e) {
      return {
        status: 500,
        payload: null
      }
    }
  }
}

export default new QRCodeService();