import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const pluginsDir = path.join(process.cwd(), 'test');
  const files = fs.readdirSync(pluginsDir);
  const plugins = {};

  for (const file of files) {
    const filePath = path.join(pluginsDir, file);
    plugins[file] = fs.readFileSync(filePath, 'utf8');
  }

  res.status(200).json(plugins);
}
