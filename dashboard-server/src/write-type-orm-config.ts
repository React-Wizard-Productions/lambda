import { configService } from './config/configService';
import fs = require('fs');

const fileName = `${process.cwd()}/ormconfig.json`;

try {
  fs.unlinkSync(fileName);
} catch (_) {
  console.log(`${fileName} not found.`);
}

const data = JSON.stringify(configService.getTypeOrmConfig(), null, 2);

fs.writeFileSync(fileName, data);
